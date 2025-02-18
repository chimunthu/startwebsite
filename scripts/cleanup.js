import { readFileSync, readdirSync, statSync, unlinkSync } from 'fs';
import { join, relative } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Files that should always be kept
const WHITELIST = [
  'index.tsx',
  'App.tsx',
  'main.tsx',
  'vite.config.ts',
  'tsconfig.json',
  'package.json',
  'tailwind.config.js',
  'postcss.config.js'
];

function findUnusedFiles(directory) {
  // Run depcheck
  const depcheckOutput = JSON.parse(
    execSync('depcheck --json', { encoding: 'utf8' })
  );

  const unusedFiles = [];
  
  function walkDir(dir) {
    const files = readdirSync(dir);
    
    files.forEach(file => {
      const filePath = join(dir, file);
      const relativePath = relative(process.cwd(), filePath);
      
      if (statSync(filePath).isDirectory()) {
        // Skip node_modules and hidden directories
        if (!file.startsWith('.') && file !== 'node_modules') {
          walkDir(filePath);
        }
      } else {
        // Check if file is used
        if (!WHITELIST.includes(file) && 
            !depcheckOutput.using.includes(relativePath) &&
            file.match(/\.(ts|tsx|js|jsx)$/)) {
          unusedFiles.push(relativePath);
        }
      }
    });
  }

  walkDir(directory);
  return unusedFiles;
}

// Execute
const srcDir = join(process.cwd(), 'src');
const unusedFiles = findUnusedFiles(srcDir);

if (unusedFiles.length === 0) {
  console.log('No unused files found!');
} else {
  console.log('Unused files found:');
  unusedFiles.forEach(file => {
    console.log(`- ${file}`);
  });
  
  // Ask for confirmation before deletion
  console.log('\nWould you like to delete these files? (y/n)');
  process.stdin.once('data', data => {
    const answer = data.toString().trim().toLowerCase();
    if (answer === 'y') {
      unusedFiles.forEach(file => {
        unlinkSync(file);
        console.log(`Deleted: ${file}`);
      });
      console.log('Cleanup complete!');
    } else {
      console.log('No files were deleted.');
    }
    process.exit();
  });
}

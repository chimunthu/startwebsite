import React from 'react';
import Navbar from './Navbar';
import Footer from '../footer/Footer';
import CTASection from '../cta/CTASection';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default MainLayout;

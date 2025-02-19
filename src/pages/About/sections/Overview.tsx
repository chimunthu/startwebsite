import React from 'react';
import { logo } from '../../../assets/images';

const Overview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Start Space Workspace"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-6 rounded-2xl shadow-xl">
              <img
                src={logo}
                alt="Start Space Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-8">
              Sobre a Start Space
            </h2>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Start Space é mais do que uma aceleradora de startups, somos uma empresa que segue o conceito de <span className="font-bold text-primary">Kingdom Business</span>. Nosso compromisso com a <span className="bg-primary/10 px-2 py-1 rounded">excelência e integridade</span> reflete nosso objetivo de ser uma empresa de negócios do Reino de Deus, onde nosso trabalho visa impactar positivamente as pessoas e a sociedade que nos cercam.
              </p>
              <p className="leading-relaxed">
                Acreditamos que a <span className="underline decoration-accent decoration-2">inovação e o empreendedorismo</span> são fundamentais para o crescimento econômico e social, e estamos empenhados em fornecer as ferramentas e recursos necessários para que nossos empreendedores possam alcançar seu pleno potencial, de acordo com os <span className="font-bold text-primary">valores do Reino de Deus</span>.
              </p>
              <p className="leading-relaxed">
                Combinamos a <span className="bg-accent/10 px-2 py-1 rounded">experiência e o conhecimento</span> de uma aceleradora de startups com o treinamento e capacitação de uma organização como a Sinapis, para ajudar os empreendedores a desenvolver seus negócios de forma <span className="font-bold">ética e com visão de longo prazo</span>.
              </p>
              <p className="leading-relaxed">
                Nossa equipe e nossa rede de <span className="underline decoration-primary decoration-2">parceiros e mentores</span> estão comprometidos em ajudar empreendedores a superar desafios e transformar ideias em negócios bem-sucedidos, seguindo os princípios do Reino de Deus. Oferecemos uma ampla gama de serviços para apoiar o desenvolvimento de startups, incluindo <span className="bg-primary/10 px-2 py-1 rounded">mentorias, treinamentos, networking e investimentos</span>, sempre buscando a excelência em nossos serviços e no impacto positivo que geramos na sociedade.
              </p>
              <p className="leading-relaxed">
                Se você é um <span className="font-bold text-accent">empreendedor</span> em busca de suporte e recursos para sua startup, estamos aqui para ajudá-lo a alcançar seus objetivos de negócios, com uma abordagem baseada nos valores do Reino de Deus. Junte-se a nós no Start Space e faça parte de uma <span className="bg-accent/10 px-2 py-1 rounded">comunidade de empreendedores inovadores</span> que estão transformando a região e buscando deixar um legado duradouro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;

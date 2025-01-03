import { Rocket, Lightbulb, Users, PiggyBank } from 'lucide-react';

export const services = [
  {
    icon: Rocket,
    title: "Aceleração de Startups",
    description: "Programa intensivo de aceleração com mentoria especializada, recursos e suporte para impulsionar o crescimento do seu negócio.",
    buttonText: "Inscreva-se Agora",
    action: () => console.log("Aceleração")
  },
  {
    icon: Lightbulb,
    title: "Programa de Incubação",
    description: "Suporte completo para startups em estágio inicial, incluindo espaço de trabalho, mentoria e acesso à nossa rede de parceiros.",
    buttonText: "Saiba Mais",
    action: () => console.log("Incubação")
  },
  {
    icon: Users,
    title: "Eventos de Networking",
    description: "Conecte-se com outros empreendedores, mentores e investidores em nossos eventos exclusivos de networking e conhecimento.",
    buttonText: "Participe de um Evento",
    action: () => console.log("Eventos")
  },
  {
    icon: PiggyBank,
    title: "Investimentos",
    description: "Oportunidade de investimento para startups alinhadas com nossos valores. Conectamos você com nossa rede de investidores.",
    buttonText: "Candidate-se para Investimento",
    action: () => console.log("Investimento")
  }
];
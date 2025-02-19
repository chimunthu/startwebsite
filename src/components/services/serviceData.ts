import { Rocket, Lightbulb, Users, PiggyBank } from 'lucide-react';

export const services = [
  {
    icon: Rocket,
    titleKey: "services.acceleration.title",
    descriptionKey: "services.acceleration.description",
    buttonTextKey: "services.acceleration.button",
    action: () => console.log("Aceleração")
  },
  {
    icon: Lightbulb,
    titleKey: "services.incubation.title",
    descriptionKey: "services.incubation.description",
    buttonTextKey: "services.incubation.button",
    action: () => console.log("Incubação")
  },
  {
    icon: Users,
    titleKey: "services.networking.title",
    descriptionKey: "services.networking.description",
    buttonTextKey: "services.networking.button",
    action: () => console.log("Eventos")
  },
  {
    icon: PiggyBank,
    titleKey: "services.investment.title",
    descriptionKey: "services.investment.description",
    buttonTextKey: "services.investment.button",
    action: () => console.log("Investimento")
  }
];

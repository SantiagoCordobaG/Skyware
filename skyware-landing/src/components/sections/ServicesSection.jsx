import { Bot, Code2, Globe2, Rocket, Sparkles, Zap } from "lucide-react";
import { services, servicesIntro } from "../../data/services";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const serviceIcons = {
  Bot,
  Code2,
  Globe2,
  Rocket,
  Sparkles,
  Zap,
};

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="bg-gradient-to-b from-white to-[var(--color-skyware-surface-light)] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge={servicesIntro.badge}
          title={servicesIntro.title}
          description={servicesIntro.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon] ?? Code2;

            return (
              <Card
                as="article"
                key={service.title}
                className="transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../config/site";
import { heroContent } from "../../data/landingContent";
import Button from "../ui/Button";
import SectionBadge from "../ui/SectionBadge";
import { Spotlight, SpotlightCard } from "../ui/Spotlight";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-skyware-surface-light)] via-white to-white pt-32"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="relative max-w-4xl">
          <SectionBadge>{heroContent.badge}</SectionBadge>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {heroContent.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.whatsapp.url}
              ariaLabel="Solicitar una página web profesional por WhatsApp"
            >
              {heroContent.primaryCta}
            </Button>
            <Button href={heroContent.secondaryHref} variant="secondary">
              {heroContent.secondaryCta}
            </Button>
          </div>

          <Spotlight className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroContent.highlights.map((item) => (
              <SpotlightCard
                key={item}
                className="p-4 text-sm font-bold text-slate-700"
              >
                <CheckCircle2 className="mb-2 h-5 w-5 text-blue-600" />
                {item}
              </SpotlightCard>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}

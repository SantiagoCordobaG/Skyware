import { Cloud } from "lucide-react";
import { siteConfig } from "../../config/site";
import { finalCtaContent } from "../../data/landingContent";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section id="contacto" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--color-skyware-blue-dark)] p-8 text-center text-white shadow-2xl shadow-blue-900/20 lg:p-16">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
          <Cloud className="h-8 w-8 text-[var(--color-skyware-sky-blue)]" />
        </div>
        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          {finalCtaContent.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
          {finalCtaContent.description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            href={siteConfig.whatsapp.url}
            ariaLabel={siteConfig.whatsapp.ariaLabel}
          >
            {finalCtaContent.primaryCta}
          </Button>
          <Button href={siteConfig.emailUrl} variant="ghost">
            {finalCtaContent.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}

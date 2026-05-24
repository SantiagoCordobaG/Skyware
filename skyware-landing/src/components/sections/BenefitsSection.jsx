import { siteConfig } from "../../config/site";
import { benefitsIntro } from "../../data/benefits";
import Button from "../ui/Button";
import SectionBadge from "../ui/SectionBadge";

export default function BenefitsSection() {
  return (
    <section className="bg-[var(--color-skyware-surface-light)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionBadge>{benefitsIntro.badge}</SectionBadge>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {benefitsIntro.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {benefitsIntro.description}
          </p>
          <Button
            href={siteConfig.whatsapp.url}
            className="mt-8"
            ariaLabel="Solicitar mejora de presencia digital por WhatsApp"
          >
            {benefitsIntro.cta}
          </Button>
        </div>

        {/* <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 rounded-2xl border border-white bg-white p-5 text-sm font-bold text-slate-700 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
              {benefit}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

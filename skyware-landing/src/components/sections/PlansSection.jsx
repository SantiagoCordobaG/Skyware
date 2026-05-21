import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "../../config/site";
import { plans, plansIntro } from "../../data/plans";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function PlansSection() {
  return (
    <section
      id="planes"
      className="bg-gradient-to-b from-[var(--color-skyware-surface-light)] to-white py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge={plansIntro.badge}
          title={plansIntro.title}
          description={plansIntro.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 shadow-sm ${
                plan.featured
                  ? "border-blue-200 bg-[var(--color-skyware-blue-dark)] text-white shadow-2xl shadow-blue-900/10"
                  : "border-slate-100 bg-white text-slate-950"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-[var(--color-skyware-blue-primary)] px-3 py-1 text-xs font-black text-white">
                  {plan.featuredLabel}
                </div>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p
                className={`mt-3 leading-7 ${
                  plan.featured ? "text-blue-100" : "text-slate-600"
                }`}
              >
                {plan.subtitle}
              </p>
              <p className="mt-6 text-lg font-black">{plan.price}</p>
              <div className="mt-6 grid gap-3">
                {plan.includes.map((item) => (
                  <div key={item} className="flex gap-3 text-sm font-semibold">
                    <CheckCircle2
                      className={`h-5 w-5 shrink-0 ${
                        plan.featured
                          ? "text-[var(--color-skyware-sky-blue)]"
                          : "text-blue-600"
                      }`}
                    />
                    {item}
                  </div>
                ))}
              </div>
              <Button
                href={siteConfig.whatsapp.url}
                className="mt-8 w-full"
                ariaLabel={`${plan.cta} por WhatsApp`}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

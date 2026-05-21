import { ShieldCheck } from "lucide-react";
import { aiIntro, aiUses } from "../../data/aiUses";
import { trustIntro, trustItems } from "../../data/trustItems";
import SectionBadge from "../ui/SectionBadge";

export default function TrustAndAISection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm lg:p-10">
          <SectionBadge>{trustIntro.badge}</SectionBadge>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {trustIntro.title}
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            {trustIntro.description}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-bold text-slate-700"
              >
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-[var(--color-skyware-blue-medium)] to-[var(--color-skyware-blue-primary)] p-8 text-white shadow-2xl shadow-blue-900/10 lg:p-10">
          <SectionBadge>{aiIntro.badge}</SectionBadge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {aiIntro.title}
          </h2>
          <p className="mt-5 leading-8 text-blue-50">{aiIntro.description}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {aiUses.map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-bold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

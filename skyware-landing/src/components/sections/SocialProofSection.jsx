import { socialProofContent } from "../../data/landingContent";
import SectionHeader from "../ui/SectionHeader";

export default function SocialProofSection() {
  return (
    <section className="bg-[var(--color-skyware-surface-light)] py-20">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <SectionHeader
          badge={socialProofContent.badge}
          title={socialProofContent.title}
          description={socialProofContent.description}
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {socialProofContent.placeholders.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-dashed border-blue-200 bg-white p-8 text-sm font-bold text-slate-600"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { processIntro, processSteps } from "../../data/process";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader badge={processIntro.badge} title={processIntro.title} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <Card as="article" key={item.step}>
              <div className="mb-6 text-5xl font-black text-blue-100">
                {item.step}
              </div>
              <h3 className="text-xl font-black text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

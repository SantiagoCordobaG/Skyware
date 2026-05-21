import { CheckCircle2 } from "lucide-react";
import { problemSolutionContent } from "../../data/landingContent";
import Card from "../ui/Card";
import SectionBadge from "../ui/SectionBadge";

export default function ProblemSolution() {
  const { problem, solution } = problemSolutionContent;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
        <Card className="bg-slate-50 p-8 lg:p-10">
          <SectionBadge>{problem.badge}</SectionBadge>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {problem.title}
          </h2>
          <p className="mt-5 text-slate-600">{problem.description}</p>
          <div className="mt-8 grid gap-3">
            {problem.items.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold text-slate-700"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </Card>

        <div className="rounded-[2rem] bg-[var(--color-skyware-blue-dark)] p-8 text-white shadow-2xl shadow-blue-900/10 lg:p-10">
          <SectionBadge>{solution.badge}</SectionBadge>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {solution.title}
          </h2>
          <p className="mt-5 text-blue-100">{solution.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {solution.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-bold"
              >
                <CheckCircle2 className="h-5 w-5 text-[var(--color-skyware-sky-blue)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

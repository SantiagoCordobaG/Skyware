import { ExternalLink, MapPin, Sparkles } from "lucide-react";
import { socialProofContent } from "../../data/landingContent";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import { Spotlight, SpotlightCard } from "../ui/Spotlight";

export default function SocialProofSection() {
  return (
    <section id="proyectos" className="bg-[var(--color-skyware-surface-light)] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          badge={socialProofContent.badge}
          title={socialProofContent.title}
          description={socialProofContent.description}
        />

        <Spotlight className="mx-auto mt-12 grid gap-6 lg:grid-cols-2">
          {socialProofContent.projects.map((project) => (
            <SpotlightCard key={project.name} className="h-full p-0">
              <article className="flex h-full flex-col overflow-hidden">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver página de ${project.name}`}
                  className="group relative block aspect-[16/10] overflow-hidden bg-slate-950 focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/12 px-4 py-3 text-white backdrop-blur-md">
                    <span className="text-sm font-bold">{project.name}</span>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold">
                      Ver sitio
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-7 text-left md:p-9">
                  <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2">
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                      {project.type}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 text-slate-600">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {project.location}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="min-h-[5.5rem] text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 min-h-[8rem] leading-8 text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-slate-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <Button href={project.url} target="_blank" rel="noreferrer">
                      Ver página publicada
                    </Button>
                  </div>
                </div>
              </article>
            </SpotlightCard>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}

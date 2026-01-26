import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArrowUpRight, Mail } from "lucide-react";
// TODO add social link URLS
export default function App() {
  const projects = [
    {
      id: 1,
      title: "Senet Estate Sales LLC",
      category: "Independent Client Work",
      description:
        "Full-Stack App for self-hosting estate sale listings. Built with Sanity.io, TypeScript, React + Next.js",
      image:
        "https://i.postimg.cc/43rGZD6g/Screenshot-2026-01-26-at-1-17-45-PM.png",
      url: "https://senetestatesales.com",
      date: "2025",
    },
    {
      id: 2,
      title: "Pampered Chef 360° Virtual Kitchen Experience",
      category: "Selected Freelance Projects",
      description:
        "A web application hosting a 3D virtual kitchen environment for hosting in-house product showcases virtually. ",
      image: "https://i.postimg.cc/ZKk1RPvj/pc-spring.png",
      url: "https://pc-spring22-test.netlify.app/",
      date: "2021",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden flex flex-col">
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col min-h-screen">
        <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
          <div className="text-lg sm:text-xl tracking-tight "></div>
        </header>

        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-20 pb-16 md:pb-20">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-base sm:text-lg md:text-xl text-muted-foreground font-mono lowercase">
                    William Greer <br /> Frontend Engineer, Phoenix az
                  </span>
                  <div className="hidden sm:flex gap-4 sm:gap-6 text-xxs sm:text-xs text-muted-foreground text-right">
                    <a
                      href="https://www.linkedin.com/in/willfromspace"
                      className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      linkedin
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.github.com/wxgrzr"
                      className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                      aria-label="GitHub profile"
                    >
                      github
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xxs sm:text-xs text-muted-foreground lowercase">
                  <span>React • TypeScript</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-green-600 animate-soft-blink">
                    Open to work
                  </span>
                </div>
                <a
                  href="mailto:me@will-greer.com"
                  className="inline-flex items-center gap-2 text-xxs sm:text-xs text-foreground underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground transition-colors w-fit"
                  aria-label="Email me"
                >
                  <Mail className="h-3.5 w-3.5" />
                  me@will-greer.com
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl w-full">
            {projects.map((project) => {
              const CardTag = project.url ? "a" : "div";
              return (
                <CardTag
                  key={project.id}
                  {...(project.url
                    ? {
                        href: project.url,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        "aria-label": `Open ${project.title} project`,
                      }
                    : {})}
                  className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-muted"
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                      <div className="text-[9px] sm:text-[11px] uppercase tracking-widest text-background/70 mb-1 sm:mb-2">
                        {project.category}
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl tracking-tight mb-1 sm:mb-2 text-background">
                        {project.title}
                      </h2>
                      <p className="text-[11px] sm:text-xs text-background/80 mb-3 sm:mb-4 ">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between gap-3">
                        {project.url ? (
                          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-background group-hover:gap-3 transition-all duration-300">
                            Visit
                            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </span>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-background group-hover:gap-3 transition-all duration-300 cursor-pointer"
                          >
                            View Case Study
                            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        )}
                        {project.date ? (
                          <span className="px-2 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest text-background/80 border border-background/30 rounded-full">
                            {project.date}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto px-4 sm:px-6 md:px-8 pt-6 pb-10 md:pt-6 md:pb-10 flex items-center justify-between text-xxs sm:text-xs text-muted-foreground">
          <div className="uppercase text-[0.85em]">© 2026 W.G.</div>
          <div className="flex sm:hidden gap-4 text-xxs text-muted-foreground">
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              aria-label="LinkedIn profile"
            >
              linkedin
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
              aria-label="GitHub profile"
            >
              github
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

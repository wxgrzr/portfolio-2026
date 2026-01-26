import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArrowUpRight, Mail } from "lucide-react";

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Urban Spaces",
      category: "Architecture & Design",
      description: "Redefining modern living through sustainable architecture",
      image:
        "https://images.unsplash.com/photo-1662504510821-ae7577ad13dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY4MTU4NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      title: "Creative Studio",
      category: "Brand & Experience",
      description: "Crafting digital experiences that inspire and engage",
      image:
        "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY4MjAwNTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden flex flex-col">
      <div className="relative w-full max-w-[1200px] mx-auto flex flex-col min-h-screen">
        <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
          <div className="text-lg sm:text-xl tracking-tight "></div>
        </header>

        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-20 pb-16 md:pb-20">
        {/* Hero Text */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.75]">
              WGREER
            </h1> */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-start justify-between gap-6">
                <span className="text-base sm:text-lg md:text-xl text-muted-foreground font-mono lowercase">
                  William Greer, <br /> Frontend Engineer, Phoenix az
                </span>
                <div className="hidden sm:flex gap-4 sm:gap-6 text-xxs sm:text-xs text-muted-foreground text-right">
                  <a href="#" className="hover:text-foreground transition-colors">
                    linkedin
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    github
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xxs sm:text-xs text-muted-foreground">
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

        {/* Summary */}
        {/* <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl lowercase mb-8 sm:mb-10 md:mb-12">
          building thoughtful, accessible web experiences with React and modern frontend tools.
        </p> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer rounded-sm"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-background/70 mb-1 sm:mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-1 sm:mb-2 text-background">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-background/80 mb-3 sm:mb-4 ">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-xs sm:text-sm text-background group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    view case study
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Footer */}
        <footer className="mt-auto px-4 sm:px-6 md:px-8 py-6 md:py-6 flex items-center justify-between text-xxs sm:text-xs text-muted-foreground">
          <div>© 2026 W.G.</div>
          <div className="flex sm:hidden gap-4 text-xxs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              linkedin
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

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
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <div className="text-lg sm:text-xl tracking-tight "></div>
        <nav className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm ">
          <button className="hover:opacity-70 transition-opacity text-gray-400">
            contact
          </button>
        </nav>
      </header>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 pt-20 pb-16 md:pb-20">
        {/* Hero Text */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.75]">
              W.GREER
            </h1>
            <span className="text-base sm:text-lg md:text-xl text-gray-400 font-mono lowercase">
              Frontend Engineer, Phoenix
            </span>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-md lg:text-right lowercase">
            building thoughtful, accessible web experiences with React and
            modern frontend tools.
          </p>
          {/* <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl uppercase">
            Frontend Developer
            <br />
          </p> */}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer rounded-sm"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-1 sm:mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight mb-1 sm:mb-2 ">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 ">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-xs sm:text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer">
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
      <footer className="mt-auto px-4 sm:px-6 md:px-8 py-4 md:py-6 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center text-xs sm:text-sm text-gray-500">
        <div className="order-2 sm:order-1">© 2026 W.G.</div>
        <div className="flex gap-4 sm:gap-6 order-1 sm:order-2">
          <a href="#" className="hover:text-white transition-colors">
            linkedin
          </a>
          <a href="#" className="hover:text-white transition-colors">
            github
          </a>
        </div>
      </footer>
    </div>
  );
}

import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Urban Spaces",
      category: "Architecture & Design",
      description: "Redefining modern living through sustainable architecture",
      image: "https://images.unsplash.com/photo-1662504510821-ae7577ad13dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzY4MTU4NzMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: 2,
      title: "Creative Studio",
      category: "Brand & Experience",
      description: "Crafting digital experiences that inspire and engage",
      image: "https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY4MjAwNTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="text-xl tracking-tight lowercase">portfolio</div>
        <nav className="flex gap-8 text-sm lowercase">
          <button className="hover:opacity-70 transition-opacity">work</button>
          <button className="hover:opacity-70 transition-opacity">about</button>
          <button className="hover:opacity-70 transition-opacity">contact</button>
        </nav>
      </header>

      {/* Main Content */}
      <div className="h-full flex flex-col justify-center px-8 md:px-16">
        {/* Hero Text */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-12 lowercase">
            william
            <br />
            greer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-md lowercase">
            turning caffeine into code and pixels into perfection
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                    {project.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl tracking-tight mb-2 lowercase">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4 lowercase">
                    {project.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-sm hover:gap-3 transition-all duration-300 lowercase">
                    view case study
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 px-8 py-6 flex justify-between items-center text-sm text-gray-500">
        <div className="lowercase">© 2026 all rights reserved</div>
        <div className="flex gap-6 lowercase">
          <a href="#" className="hover:text-white transition-colors">linkedin</a>
          <a href="#" className="hover:text-white transition-colors">instagram</a>
          <a href="#" className="hover:text-white transition-colors">behance</a>
        </div>
      </footer>
    </div>
  );
}
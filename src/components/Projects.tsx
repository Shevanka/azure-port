import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'

const Projects = () => {
  const { t } = useLanguage()

  const projects = [
    {
      title: 'Yumyard',
      description:
        t.skills.frontend === 'Frontend'
          ? 'Modern food delivery app platform with complete features and attractive UI'
          : 'Platform food delivery app modern dengan fitur lengkap dan UI yang menarik',
      image:
        'https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Dart', 'Flutter', 'Figma'],
      liveUrl: 'https://github.com/Shevanka/final-project-android-dev/releases/tag/v0.1',
      githubUrl: 'https://github.com/Shevanka/final-project-android-dev',
    },
    {
      title: 'Si Kaya',
      description:
        t.skills.frontend === 'Frontend, Backend'
          ? 'A modern offline-first Progressive Web App (PWA) for personal expense tracking.'
          : 'Progressive Web App (PWA) modern yang mengutamakan akses offline untuk melacak pengeluaran pribadi',
      image: 'https://unsplash.com/id/ilustrasi/kartu-kredit-celengan-koin-dan-smartphone-dengan-grafik-q4HBL4-GlZs',
      tags: ['REST API', 'JavaScript', 'SQLite', 'PWA'],
      liveUrl: 'https://github.com/Shevanka/si-kaya',
      githubUrl: 'https://github.com/Shevanka/si-kaya',
    },
    {
      title: 'Ecommerce System',
      description:
        t.skills.frontend === 'Frontend, Backend'
          ? 'A web-based e-commerce and online sales information system built with Native PHP'
          : 'Sistem informasi e-commerce dan penjualan online berbasis web yang dibangun menggunakan Native PHP.',
      image: 'https://unsplash.com/id/foto/keranjang-dengan-target-target-target-di-dalamnya-dan--_jFGWIE6fg',
      tags: ['PHP', 'CSS', 'MySQL'],
      liveUrl: 'https://github.com/Shevanka/php-ecommerce-system',
      githubUrl: 'https://github.com/Shevanka/php-ecommerce-system',
    },
    {
      title: 'LUA Engine',
      description:
        t.skills.frontend === 'Backend'
          ? 'This project provides an embedded Lua interpreter, allowing exposure of custom C functions to Lua, a foundation for game engine scripting.'
          : 'Proyek ini menyediakan interpreter Lua tersemat yang memungkinkan fungsi C kustom diekspos ke Lua, sebagai landasan bagi pembuatan skrip pada mesin game.',
      image: 'https://cintaprogramming.com/2019/08/03/mengenal-bahasa-pemrograman-lua/',
      tags: ['Lua', 'C', 'Game Engine'],
      liveUrl: 'https://github.com/Shevanka/lua-engine',
      githubUrl: 'https://github.com/Shevanka/lua-engine',
    },
    {
      title: 'CLI Games Based on C',
      description:
        t.skills.frontend === 'Backend'
          ? 'A collection of simple terminal-based games written in C, designed to demonstrate fundamental programming concepts.'
          : 'Kumpulan permainan sederhana berbasis terminal yang ditulis dalam bahasa C, dirancang untuk mendemonstrasikan konsep-konsep dasar pemrograman.',
      image: 'https://unsplash.com/id/foto/teks-KNZHyTpre18',
      tags: ['C', 'Terminal', 'Game Development'],
      liveUrl: 'https://github.com/Shevanka/c-mini-games',
      githubUrl: 'https://github.com/Shevanka/c-mini-games',
    },
    {
      title: 'Systems Administrator',
      description:
        t.skills.frontend === 'Unix/Linux, Windows'
          ? 'A fully functional, virtualized enterprise IT environment built via VirtualBox.'
          : 'Lingkungan TI perusahaan tervirtualisasi yang berfungsi penuh, dibangun menggunakan VirtualBox.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
      tags: ['VirtualBox', 'Linux', 'Windows'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t.projects.title} <span className="text-primary glow-text">{t.projects.subtitle}</span>
          </h2>

          {/* Glowing Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full glow-effect" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:glow-effect relative"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t.projects.viewProject}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

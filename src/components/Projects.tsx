import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan fitur lengkap dan UI yang menarik",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan drag-and-drop interface",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      tags: ["TypeScript", "Next.js", "Prisma"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard analitik untuk mengelola multiple social media accounts",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["React", "Chart.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Aplikasi prakiraan cuaca dengan visualisasi data interaktif",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      tags: ["Vue.js", "API Integration", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Website",
      description: "Website properti dengan pencarian advanced dan virtual tour",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      tags: ["Next.js", "Strapi", "MapBox"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description: "Aplikasi tracking workout dan nutrisi dengan AI recommendations",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      tags: ["React Native", "Firebase", "AI"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Proyek <span className="text-primary glow-text">Saya</span>
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
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

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
                      Live Demo
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
  );
};

export default Projects;

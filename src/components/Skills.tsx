import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t.skills.frontend,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      category: t.skills.backend,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST API", level: 90 },
      ],
    },
    {
      category: t.skills.tools,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 85 },
        { name: "AWS", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t.skills.title} <span className="text-primary glow-text">{t.skills.subtitle}</span>
          </h2>
          
          {/* Glowing Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full glow-effect" />

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className="text-sm font-medium group-hover:bg-primary/20 group-hover:text-primary transition-colors"
                        >
                          {skill.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:glow-effect relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

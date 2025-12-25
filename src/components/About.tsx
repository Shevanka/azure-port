import { Code2, Palette, Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t.about.cleanCode,
      description: t.about.cleanCodeDesc,
    },
    {
      icon: Palette,
      title: t.about.modernDesign,
      description: t.about.modernDesignDesc,
    },
    {
      icon: Rocket,
      title: t.about.fastPerformance,
      description: t.about.fastPerformanceDesc,
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t.about.title} <span className="text-primary glow-text">{t.about.subtitle}</span>
          </h2>
          
          {/* Glowing Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full glow-effect" />

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            {t.about.description}
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-effect hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <item.icon className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

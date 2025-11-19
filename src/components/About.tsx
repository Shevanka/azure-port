import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Menulis kode yang bersih dan maintainable",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Menciptakan desain yang indah dan fungsional",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimasi untuk performa maksimal",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Tentang <span className="text-primary glow-text">Saya</span>
          </h2>
          
          {/* Glowing Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full glow-effect" />

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            Saya adalah seorang developer yang passionate dalam menciptakan pengalaman digital
            yang menarik dan inovatif. Dengan fokus pada teknologi web modern, saya mengombinasikan
            kreativitas desain dengan keahlian teknis untuk menghadirkan solusi yang tidak hanya
            fungsional, tetapi juga estetis.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

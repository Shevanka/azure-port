import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.contact.successTitle,
      description: t.contact.successMessage,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Mail, label: "Email", url: "mailto:hello@example.com" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            {t.contact.title} <span className="text-primary glow-text">{t.contact.subtitle}</span>
          </h2>
          
          {/* Glowing Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full glow-effect" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-primary/30 focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-primary/30 focus:border-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-[150px] border-primary/30 focus:border-primary transition-colors"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 glow-effect transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  {t.contact.sendMessage}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="p-8 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  {t.contact.letsConnect}
                </h3>
                <p className="text-muted-foreground mb-8">
                  {t.contact.connectDesc}
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

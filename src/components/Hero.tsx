import { Button } from '@/components/ui/button'
import { Download, Mail } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'
import FloatingElements from '@/components/FloatingElements'
import AnimatedGradient from '@/components/AnimatedGradient'
import { useLanguage } from '@/hooks/useLanguage'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Layers */}
      <AnimatedGradient />
      <ParticleBackground />
      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/50 glow-effect transition-transform duration-500 group-hover:scale-110">
              <img
                src="/images/profile.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rotating ring */}
            <div
              className="absolute inset-0 w-40 h-40 border-2 border-primary/30 rounded-full animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground animate-slide-up">
            {t.hero.greeting} <span className="text-primary glow-text">{t.hero.role}</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-slide-up delay-100">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Mail className="mr-2 h-5 w-5" />
              {t.hero.contactMe}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Download className="mr-2 h-5 w-5" />
              {t.hero.downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

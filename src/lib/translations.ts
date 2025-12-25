export type Language = 'id' | 'en';

interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    contactMe: string;
    downloadCV: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    cleanCode: string;
    cleanCodeDesc: string;
    modernDesign: string;
    modernDesignDesc: string;
    fastPerformance: string;
    fastPerformanceDesc: string;
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    tools: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    letsConnect: string;
    connectDesc: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendMessage: string;
    successTitle: string;
    successMessage: string;
  };
  footer: {
    builtWith: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Halo, Saya',
      role: 'Developer',
      description: 'Creative Full-Stack Developer yang berfokus pada pembuatan website modern dan aplikasi web yang inovatif',
      contactMe: 'Hubungi Saya',
      downloadCV: 'Unduh CV',
    },
    about: {
      title: 'Tentang',
      subtitle: 'Saya',
      description: 'Saya adalah seorang developer yang passionate dalam menciptakan pengalaman digital yang menarik dan inovatif. Dengan fokus pada teknologi web modern, saya mengombinasikan kreativitas desain dengan keahlian teknis untuk menghadirkan solusi yang tidak hanya fungsional, tetapi juga estetis.',
      cleanCode: 'Clean Code',
      cleanCodeDesc: 'Menulis kode yang bersih dan maintainable',
      modernDesign: 'Modern Design',
      modernDesignDesc: 'Menciptakan desain yang indah dan fungsional',
      fastPerformance: 'Fast Performance',
      fastPerformanceDesc: 'Optimasi untuk performa maksimal',
    },
    skills: {
      title: 'Keahlian',
      subtitle: 'Saya',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Lainnya',
    },
    projects: {
      title: 'Proyek',
      subtitle: 'Saya',
      viewProject: 'Live Demo',
      viewCode: 'Kode',
    },
    contact: {
      title: 'Hubungi',
      subtitle: 'Saya',
      letsConnect: 'Mari Terhubung!',
      connectDesc: 'Saya terbuka untuk peluang kolaborasi dan proyek menarik. Jangan ragu untuk menghubungi saya melalui form atau social media.',
      namePlaceholder: 'Nama Anda',
      emailPlaceholder: 'Email Anda',
      messagePlaceholder: 'Pesan Anda',
      sendMessage: 'Kirim Pesan',
      successTitle: 'Pesan Terkirim!',
      successMessage: 'Terima kasih, saya akan segera menghubungi Anda.',
    },
    footer: {
      builtWith: 'Dibuat dengan passion',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm a",
      role: 'Developer',
      description: 'Creative Full-Stack Developer focused on building modern websites and innovative web applications',
      contactMe: 'Contact Me',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About',
      subtitle: 'Me',
      description: "I'm a developer passionate about creating engaging and innovative digital experiences. With a focus on modern web technologies, I combine design creativity with technical expertise to deliver solutions that are not only functional but also aesthetically pleasing.",
      cleanCode: 'Clean Code',
      cleanCodeDesc: 'Writing clean and maintainable code',
      modernDesign: 'Modern Design',
      modernDesignDesc: 'Creating beautiful and functional designs',
      fastPerformance: 'Fast Performance',
      fastPerformanceDesc: 'Optimized for maximum performance',
    },
    skills: {
      title: 'My',
      subtitle: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Others',
    },
    projects: {
      title: 'My',
      subtitle: 'Projects',
      viewProject: 'Live Demo',
      viewCode: 'Code',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Me',
      letsConnect: "Let's Connect!",
      connectDesc: "I'm open to collaboration opportunities and exciting projects. Feel free to reach out through the form or social media.",
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      sendMessage: 'Send Message',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you, I will get back to you soon.',
    },
    footer: {
      builtWith: 'Built with passion',
    },
  },
};

export type Translations = TranslationStrings;

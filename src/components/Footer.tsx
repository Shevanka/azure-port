import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Portfolio.{" "}
            <span className="text-primary">{t.footer.builtWith}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

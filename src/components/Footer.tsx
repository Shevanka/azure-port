const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Portfolio.{" "}
            <span className="text-primary">Built with passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

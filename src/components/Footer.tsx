import { Heart, Linkedin, Mail, Phone, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-foreground text-primary-foreground py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
              <span className="inline-block p-2 bg-primary-foreground/10 rounded-lg">
                <Sparkles className="h-5 w-5" />
              </span>
              Ravi Savani
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              UI/UX Designer & IT Professional passionate about creating meaningful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  → Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  → About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  → Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  → Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block">
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-semibold mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 group">
                <div className="p-1.5 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:savaniravik@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  savaniravik@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="p-1.5 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  href="tel:0434878201"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  0434 878 201
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="p-1.5 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <a
                  href="https://au.linkedin.com/in/ravisavani-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Ravi Savani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

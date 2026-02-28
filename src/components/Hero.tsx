import { ArrowRight, Linkedin, Mail, Sparkles, Code, Palette, Shield, Monitor, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo-new.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(109,105,106,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(162,167,165,0.05)_0%,transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container-custom px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-muted-foreground opacity-20 animate-spin" style={{ animationDuration: "8s" }} />
              
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Ravi Savani - UI/UX Designer & IT Professional"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-background ring-2 ring-primary/20 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover-lift">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-semibold">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Code className="h-3 w-3 mr-1" />
                IT Professional
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Palette className="h-3 w-3 mr-1" />
                UI/UX Designer
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Shield className="h-3 w-3 mr-1" />
                Cybersecurity Specialist
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Monitor className="h-3 w-3 mr-1" />
                Desktop Support Engineer
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                <Headphones className="h-3 w-3 mr-1" />
                Customer Service
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-display font-bold mb-3">
                <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Ravi Savani
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-display text-muted-foreground/80 font-medium">
                Crafting Intuitive Digital Experiences
              </h2>
            </div>

            {/* Description */}
            <p className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Master's graduate in <span className="text-foreground font-medium">Information Technology and Systems</span> from UTAS, 
              specializing in cybersecurity. Passionate about creating intuitive user experiences through 
              user-centered design, prototyping, and innovative problem-solving.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover-lift">
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-xs text-muted-foreground">Years Study</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover-lift">
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover-lift">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs text-muted-foreground">Dedicated</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                onClick={() => scrollToSection("#portfolio")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://au.linkedin.com/in/ravisavani-it"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover-lift shadow-md hover:shadow-lg border border-border/50"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:savaniravik@gmail.com"
                className="p-3 bg-card/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 hover-lift shadow-md hover:shadow-lg border border-border/50"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

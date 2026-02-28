import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "savaniravik@gmail.com",
      href: "mailto:savaniravik@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0434 878 201",
      href: "tel:0434878201",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ravisavani-it",
      href: "https://au.linkedin.com/in/ravisavani-it",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tasmania, Australia",
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative section-padding bg-secondary/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(109,105,106,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(162,167,165,0.08)_0%,transparent_50%)]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <MessageCircle className="h-3 w-3 mr-1" />
            Let's Talk
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <div className="h-1 w-8 bg-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a
            conversation about design and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Card className="bg-gradient-to-br from-card via-card/90 to-card/70 border-border overflow-hidden backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                      Contact Information
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Feel free to reach out through any of these channels. I typically respond within
                      24 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.label === "LinkedIn" ? "_blank" : undefined}
                              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                              className="text-foreground font-medium hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <h4 className="font-semibold text-foreground mb-3">Connect on LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/ravisavaniishere/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        View LinkedIn Profile
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-gradient-to-br from-secondary/50 via-accent/10 to-secondary/30 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
                  
                  <div className="text-center space-y-6 relative z-10">
                    <div className="inline-flex p-6 bg-gradient-to-br from-background to-card rounded-2xl mx-auto shadow-lg">
                      <Send className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                        Let's Start a Conversation
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6">
                        Whether you have a project in mind, want to discuss opportunities, or just want
                        to connect, I'd love to hear from you.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <a href="mailto:savaniravik@gmail.com">
                        <Button
                          size="lg"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </Button>
                      </a>
                      <a href="tel:0434878201">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-gradient-to-r from-card/50 to-secondary/30 border-border/50 backdrop-blur-sm inline-block">
              <CardContent className="px-6 py-3">
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Based in Tasmania, Australia • Available for remote and on-site opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

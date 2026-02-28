import { Palette, LineChart, Headphones, Code, Users, Shield, Zap, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing interfaces with a focus on user-centered design principles. From wireframes to high-fidelity prototypes.",
      skills: ["Figma", "Prototyping", "User Flows", "Wireframing", "Usability Testing", "Design Systems"],
    },
    {
      icon: LineChart,
      title: "Business Analysis",
      description:
        "Translating business requirements into actionable solutions. Analyzing user needs, documenting processes, and bridging technical and business teams.",
      skills: ["Requirements Analysis", "Process Mapping", "Documentation", "Stakeholder Management"],
    },
    {
      icon: Code,
      title: "Web & Mobile Design",
      description:
        "Responsive design for web and mobile platforms (Android & iOS). Ensuring seamless experiences across all devices with modern design patterns.",
      skills: ["Responsive Design", "Material Design", "iOS HIG", "Cross-platform Design"],
    },
    {
      icon: Shield,
      title: "IT & Cybersecurity",
      description:
        "Applying cybersecurity knowledge to design secure systems and interfaces. Understanding security principles in user authentication and data protection.",
      skills: ["Security Principles", "Risk Assessment", "Secure Design", "Compliance"],
    },
    {
      icon: Headphones,
      title: "Customer Service & Support",
      description:
        "Excellent communication skills ready to be applied in customer-facing roles. Understanding user needs and providing effective technical support.",
      skills: ["Communication", "Problem Solving", "Technical Support", "User Training"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Strong collaborative mindset with experience working in cross-functional teams. Effective communication with designers, developers, and stakeholders.",
      skills: ["Agile Methodology", "Version Control", "Design Handoff", "Documentation"],
    },
  ];

  return (
    <section id="services" className="relative section-padding bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <div className="h-1 w-8 bg-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning design, analysis, and technology—ready to contribute to
            forward-thinking organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card via-card/80 to-card/50 border-border hover-lift animate-fade-in group backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Skills & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gradient-to-r from-secondary to-secondary/50 text-muted-foreground px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="bg-gradient-to-br from-secondary/50 via-secondary/30 to-accent/10 border-border/50 max-w-3xl mx-auto backdrop-blur-sm shadow-xl overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            
            <CardContent className="p-8 lg:p-12 relative z-10">
              <div className="inline-flex p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-4">
                Looking for Opportunities
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm actively seeking roles in UI/UX design, business analysis, customer service, help
                desk, and broader IT/cybersecurity positions. Open to opportunities where I can apply my
                skills and continue learning.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover-lift">
                  UI/UX Designer
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover-lift">
                  Business Analyst
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover-lift">
                  Customer Service
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover-lift">
                  IT Support
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover-lift">
                  Cybersecurity
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

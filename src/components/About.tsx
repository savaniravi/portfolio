import { GraduationCap, Award, Target, Users, Sparkles, Brain, Rocket, TrendingUp, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generateResume } from "@/utils/generateResume";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "Master's in IT & Systems (Cybersecurity) from UTAS, BSc in Computer Science from India",
    },
    {
      icon: Target,
      title: "User-Centered Design",
      description: "Specialized in creating intuitive interfaces through research, prototyping, and testing",
    },
    {
      icon: Award,
      title: "Project Success",
      description: "Delivered KIT700 project with positive client feedback from ACS Tasmanian Branch Manager",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Strong teamwork skills with experience in cross-functional project environments",
    },
  ];

  return (
    <section id="about" className="relative section-padding bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <Sparkles className="h-3 w-3 mr-1" />
            Get to know me
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <div className="h-1 w-8 bg-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Technical IT support professional with cybersecurity expertise and a passion for delivering quality user experiences
          </p>
          <a
            href="https://docs.google.com/document/d/15aBfS-PSUb5nON9xUEfARXxpuQxIK89J/edit?usp=drive_link&ouid=104715799468819872604&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
              size="lg"
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              View CV
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <Rocket className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                My Journey
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm a technical IT support professional with a Master's degree in Information Technology 
              and Systems, specializing in cybersecurity from the University of Tasmania (UTAS). 
              Combined with my Bachelor of Science in Computer Science from SRKI, Surat (VNSGU), 
              and hands-on UI/UX design expertise, I bring a unique blend of technical troubleshooting 
              skills and user-centered design thinking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in solving complex technical problems while ensuring exceptional user 
              experiences. Whether it's diagnosing hardware issues, securing network systems, or designing 
              intuitive interfaces, I approach every challenge with a focus on delivering quality solutions 
              that meet both technical requirements and user needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I thrive in collaborative environments where I can bridge the gap between technical teams 
              and end users, translating complex technical concepts into accessible solutions that drive 
              positive outcomes.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                Academic Achievements
              </h3>
            </div>
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-card to-card/50 border-border hover-lift group backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Master's Degree
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Information Technology and Systems (Cybersecurity)
                      </p>
                      <p className="text-sm text-accent">University of Tasmania (UTAS)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-card/50 border-border hover-lift group backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Bachelor's Degree
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Bachelor of Science in Computer Science
                      </p>
                      <p className="text-sm text-accent">
                        Shree Ramkrishna Institute of Computer Education and Applied Sciences (SRKI), Surat
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Veer Narmad South Gujarat University (VNSGU)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card via-card/80 to-card/50 border-border hover-lift animate-fade-in group backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-6 text-center relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

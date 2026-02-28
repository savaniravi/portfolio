import { Palette, Smartphone, Code2, Shield, Database, Layout, Figma, Lock, Terminal, Globe, Users, Target, Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "UI/UX Design Tools",
    icon: Palette,
    color: "hsl(260, 60%, 65%)",
    skills: [
      { name: "Figma", icon: Figma, proficiency: 90 },
      { name: "Prototyping", icon: Layout, proficiency: 85 },
      { name: "User Research", icon: Users, proficiency: 88 },
      { name: "Wireframing", icon: Layout, proficiency: 85 },
      { name: "Usability Testing", icon: Target, proficiency: 82 },
    ],
  },
  {
    title: "IT Support & Technical",
    icon: Terminal,
    color: "hsl(220, 90%, 56%)",
    skills: [
      { name: "Hardware Troubleshooting", icon: Code2, proficiency: 85 },
      { name: "Network Diagnostics", icon: Globe, proficiency: 80 },
      { name: "System Administration", icon: Database, proficiency: 78 },
      { name: "Technical Documentation", icon: Code2, proficiency: 82 },
    ],
  },
  {
    title: "Development",
    icon: Code2,
    color: "hsl(150, 60%, 50%)",
    skills: [
      { name: "Flutter", icon: Smartphone, proficiency: 80 },
      { name: "Kotlin (Android)", icon: Smartphone, proficiency: 75 },
      { name: "Swift (iOS)", icon: Smartphone, proficiency: 72 },
      { name: "Firebase", icon: Database, proficiency: 78 },
      { name: "React", icon: Code2, proficiency: 75 },
    ],
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "hsl(0, 70%, 55%)",
    skills: [
      { name: "Security Analysis", icon: Shield, proficiency: 82 },
      { name: "Risk Assessment", icon: Lock, proficiency: 80 },
      { name: "Network Security", icon: Database, proficiency: 75 },
      { name: "Penetration Testing", icon: Terminal, proficiency: 70 },
    ],
  },
  {
    title: "Soft Skills & Collaboration",
    icon: Users,
    color: "hsl(30, 70%, 60%)",
    skills: [
      { name: "Client Communication", icon: Users, proficiency: 90 },
      { name: "Agile Project Management", icon: Target, proficiency: 85 },
      { name: "Stakeholder Management", icon: Users, proficiency: 88 },
      { name: "Problem Solving", icon: Brain, proficiency: 92 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern design tools, development frameworks, and cybersecurity practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Card */}
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="p-3 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ 
                        backgroundColor: `${category.color}15`,
                        color: category.color 
                      }}
                    >
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="group/skill"
                        style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {/* Skill Item */}
                        <div className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-2 h-2 rounded-full transition-all duration-300 group-hover/skill:scale-125"
                              style={{ 
                                backgroundColor: category.color,
                                boxShadow: `0 0 8px ${category.color}60`
                              }}
                            />
                            <skill.icon className="h-4 w-4 text-muted-foreground group-hover/skill:text-primary transition-colors" />
                            <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-primary">{skill.proficiency}%</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Badge */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Badge 
                      variant="outline" 
                      className="w-full justify-center text-xs group-hover:border-primary/50 group-hover:text-primary transition-colors"
                    >
                      {category.skills.length} Skills
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                F
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-xs font-bold">
                R
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-foreground flex items-center justify-center text-white text-xs font-bold">
                S
              </div>
            </div>
            <span className="text-sm text-muted-foreground">Constantly learning and evolving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

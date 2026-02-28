import { ExternalLink, Figma, Smartphone, Globe, BookOpen, Sparkles, Star, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import techmateProject from "@/assets/techmate-poster.jpg";

const Portfolio = () => {
  const getButtonText = (title: string) => {
    if (title.includes("KIT700")) return "View Hi-Fi Prototype";
    if (title.includes("KIT721")) return "View Lo-Fi Prototype";
    if (title.includes("KIT502") || title.includes("KIT715")) return "View Video Demo";
    if (title.includes("Comic")) return "View Comic";
    return "View Project";
  };

  const projects = [
    {
      title: "KIT700 - Techmate Educational Platform",
      description:
        "Comprehensive UI/UX design project for an educational technology platform serving as both UI/UX Designer and Business Analyst. Led regular client communication with the ACS Tasmanian Branch Manager, gathering and incorporating feedback throughout the development process to ensure the final product met and exceeded client expectations.",
      image: techmateProject,
      role: "UI/UX Designer & Business Analyst",
      highlights: [
        "Regular client meetings and requirement gathering with ACS stakeholders",
        "Created detailed wireframes and user flows in Figma based on client feedback",
        "Guided cross-functional team to align deliverables with client expectations",
        "Developed high-fidelity prototypes for mobile (iOS & Android) and web platforms",
        "Conducted usability testing sessions and iterated based on user insights",
        "Ensured accessibility standards and responsive design across all touchpoints",
        "Facilitated seamless handoff to development team with comprehensive documentation",
      ],
      technologies: ["Figma", "User Research", "Prototyping", "Usability Testing", "Flutter", "Stakeholder Management"],
      feedback:
        "Received positive feedback from the Tasmanian Branch Manager for ACS for exceptional design work, strong communication skills, and ability to translate client needs into actionable design solutions.",
      prototypeLink: "https://www.figma.com/proto/uRJcBHwc0QxTDnNteQkPJz/Techmate?page-id=454%3A1561&node-id=489-10367&viewport=518%2C361%2C0.25&t=PM6vYVd8wkN0icLS-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=464%3A3035",
    },
    {
      title: "KIT721 - Mobile Application Development",
      description:
        "Developed native and cross-platform mobile applications focusing on real-time data synchronization and cloud integration. Built apps using Kotlin for Android, Swift for iOS, and Flutter for cross-platform deployment, implementing Firebase for backend services and conducting comprehensive usability testing.",
      role: "Mobile Developer & UX Researcher",
      highlights: [
        "Developed native Android applications using Kotlin with Material Design",
        "Built iOS applications using Swift following Apple Human Interface Guidelines",
        "Created cross-platform apps with Flutter for efficient multi-platform deployment",
        "Integrated Firebase for real-time database, authentication, and cloud storage",
        "Implemented push notifications and real-time data synchronization",
        "Conducted rigorous usability testing with target users to optimize user experience",
        "Applied user feedback to refine app functionality and interface design",
      ],
      technologies: ["Kotlin", "Swift", "Flutter", "Firebase", "Real-time Data", "Usability Testing", "Cloud Integration"],
      prototypeLink: "https://drive.google.com/file/d/1ZzQFbhu6zLblpqYQEXMgosWF5c0BSJ_U/view?usp=drive_link",
    },
    {
      title: "KIT502 - Web Application Project: Share & Smile",
      description:
        "Designed and developed 'Share & Smile,' a multi-role charity management platform using Laravel, with secure login/register and user authentication for system admins, project admins, and charities. Built feature-rich dashboards for different user roles and demonstrated clear communication skills through client-facing video demonstrations.",
      role: "Full-Stack Developer & UX Designer",
      highlights: [
        "Implemented secure authentication system for multiple user roles (admins, project admins, charities)",
        "Created feature-rich dashboards with donation management and charity creation capabilities",
        "Developed user-friendly navigation and donation flows with real-time activity updates",
        "Built robust admin features for project/category/user role management",
        "Implemented secure bank detail handling for charity payment processing",
        "Demonstrated platform features and usability in professional video presentation",
        "Applied collaborative problem-solving and agile feature iteration methodology",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "Authentication", "Dashboard Design", "Database Design", "Agile Development"],
      videoUrl: "https://www.youtube.com/embed/mFlOfgdFIl4",
    },
    {
      title: "KIT715 - Cybersecurity News Report",
      description:
        "Created a professional cybersecurity news report video analyzing the Fox Semicon ransomware incident. Demonstrated strong communication and research skills by presenting complex technical security concepts in an accessible news format, showcasing ability to translate technical information for diverse audiences.",
      role: "Cybersecurity Analyst & Content Creator",
      highlights: [
        "Researched and analyzed real-world ransomware attack on Fox Semicon semiconductor company",
        "Investigated Lockbit ransomware-as-a-service (RaaS) operation and attack vectors",
        "Evaluated impact on supply chain security and business operations",
        "Presented technical findings in professional news reporter format",
        "Recommended security measures including zero-trust principles and staff training",
        "Demonstrated ability to communicate complex cybersecurity concepts clearly",
        "Showcased unique approach to assignment with creative video production",
      ],
      technologies: ["Cybersecurity Analysis", "Threat Intelligence", "Risk Assessment", "Video Production", "Technical Communication"],
      prototypeLink: "https://www.linkedin.com/in/ravisavaniishere/",
    },
    {
      title: "IoT Weather Lamp System",
      description:
        "Designed and developed an IoT-enabled weather visualization system integrating hardware sensors with software for real-time environmental data collection. Applied machine learning algorithms for weather prediction and created intuitive data visualization interfaces.",
      role: "IoT Developer & Data Visualization Designer",
      highlights: [
        "Integrated multiple environmental sensors (temperature, humidity, pressure) with microcontroller",
        "Developed firmware for real-time sensor data collection and processing",
        "Created interactive data visualization dashboard for weather patterns",
        "Implemented machine learning models for local weather prediction",
        "Designed intuitive LED lamp interface to display weather forecasts visually",
        "Built RESTful API for sensor data access and remote monitoring",
      ],
      technologies: ["Arduino/ESP32", "Python", "Machine Learning", "Data Visualization", "IoT Protocols", "Sensor Integration"],
      videoUrl: "https://www.youtube.com/embed/nRVk5Aw6NgQ",
    },
    {
      title: "Cybersecurity Educational Comic",
      description:
        "Created an educational comic series to simplify complex cybersecurity concepts for general audiences. Demonstrated strong communication skills by translating technical security topics into engaging visual narratives that are accessible to non-technical users.",
      role: "Content Designer & Communicator",
      highlights: [
        "Simplified complex cybersecurity concepts (phishing, encryption, social engineering)",
        "Developed engaging visual storytelling to maintain reader interest",
        "Researched target audience to ensure appropriate language and complexity level",
        "Created character-driven narratives to illustrate real-world security scenarios",
        "Designed layouts balancing information density with visual appeal",
      ],
      technologies: ["Visual Communication", "Content Design", "Educational Design", "Cybersecurity"],
      prototypeLink: "https://drive.google.com/file/d/1t1V4pyXzq0LLrIdlZH0fZV5Ih68aD-9s/view?usp=drive_link",
    },
  ];

  return (
    <section id="portfolio" className="relative section-padding bg-secondary/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(162,167,165,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(109,105,106,0.08)_0%,transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            <Star className="h-3 w-3 mr-1" />
            Featured Work
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <div className="h-1 w-8 bg-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing projects that demonstrate user-centered design, technical expertise, and
            creative problem-solving
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-card to-card/80 border-border overflow-hidden hover-lift animate-fade-in group backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-5 gap-6">
                {project.image && (
                  <div className="lg:col-span-2 relative overflow-hidden aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                {project.videoUrl && (
                  <div className="lg:col-span-2 relative overflow-hidden aspect-video">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className={project.image || project.videoUrl ? "lg:col-span-3" : "lg:col-span-5"}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-2xl font-display">{project.title}</CardTitle>
                    </div>
                    <p className="text-sm text-accent font-medium">{project.role}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.feedback && (
                      <div className="relative bg-gradient-to-r from-secondary/50 to-accent/10 p-4 rounded-xl border-l-4 border-accent overflow-hidden">
                        <div className="absolute top-2 right-2 opacity-10">
                          <Sparkles className="h-8 w-8 text-accent" />
                        </div>
                        <p className="text-sm text-muted-foreground italic relative z-10">{project.feedback}</p>
                      </div>
                    )}

                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-secondary text-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.prototypeLink && (
                      <div className="pt-2">
                        <a
                          href={project.prototypeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group text-sm font-medium"
                        >
                          <Download className="h-4 w-4 group-hover:animate-bounce" />
                          {getButtonText(project.title)}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in space-y-6" style={{ animationDelay: "0.8s" }}>
          <Card className="bg-gradient-to-br from-card/50 to-secondary/30 border-border/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                Interested in seeing more of my work or discussing a project?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://docs.google.com/document/d/15aBfS-PSUb5nON9xUEfARXxpuQxIK89J/edit?usp=drive_link&ouid=104715799468819872604&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-medium"
                >
                  <Download className="h-4 w-4" />
                  View CV
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-primary hover:text-accent transition-all duration-300 font-medium border-2 border-primary hover:border-accent rounded-lg"
                >
                  Let's connect
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

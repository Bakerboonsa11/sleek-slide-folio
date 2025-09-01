import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Task Manager",
      description: "Intelligent task management app with AI-powered prioritization and smart scheduling. Built with modern React and integrated with OpenAI API.",
      tech: ["React", "TypeScript", "OpenAI", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Analytics",
      description: "Beautiful analytics dashboard with real-time data visualization, WebSocket connections, and interactive charts for business intelligence.",
      tech: ["Next.js", "WebSocket", "Chart.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my recent work, demonstrating expertise in modern web 
          technologies and creative problem-solving approaches.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="glass-card overflow-hidden hover-lift group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="outline" 
                    className="text-xs border-primary/30 text-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gradient-primary hover:opacity-90"
                  asChild
                >
                  <a href={project.demoUrl}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-glass-border hover-glow"
                  asChild
                >
                  <a href={project.githubUrl}>
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
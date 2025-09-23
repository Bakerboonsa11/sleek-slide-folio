import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ethio-vist Tour Platform",
      description: "A full-stack travel platform built with React and Node.js, featuring real-time booking and Chapa payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Chapa"],
      image: "visit2.png",
      demoUrl: "https://tour-app-smoky.vercel.app/",
      githubUrl: "https://github.com/Bakerboonsa11/tourApp/"
    },
    {
      title: "E-Commerce for Sport Shop",
      description: "A complete e-commerce solution for a local sports shop, built with React, Node.js, and Stripe for secure payments.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "kit.png",
      demoUrl: "https://kit-e-commerce-last-green.vercel.app/shop",
      githubUrl: "https://github.com/Bakerboonsa11/kit-e-commerce"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A sleek and responsive analytics dashboard with real-time data visualization, built with Next.js and Chart.js.",
      tech: ["Next.js", "WebSocket", "Chart.js", "MongoDB"],
      image:"soon.jpg",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Here are some of the projects I'm most proud of. They showcase my skills in creating modern, responsive, and user-friendly web applications.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-primary/5 border-primary/20 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl group"
          >
            <div className="relative h-52 overflow-hidden">
              <img 
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
            
            <div className="p-6 space-y-5">
              <h3 className="text-2xl font-bold text-primary">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary" 
                    className="bg-primary/10 text-primary/80 border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4 pt-3">
                <Button 
                  variant="default" 
                  className="bg-gradient-primary hover:opacity-90 flex-1"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/30 hover:bg-primary/10 flex-1"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
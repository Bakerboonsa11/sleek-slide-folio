import React, { Suspense } from "react";
import Navigation from "@/components/Navigation";
import SimpleHero from "@/components/SimpleHero";
import { Github, Linkedin, Mail } from "lucide-react";

const About = React.lazy(() => import("@/components/About"));
const Projects = React.lazy(() => import("@/components/Projects"));
const Contact = React.lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="home">
          <SimpleHero />
        </section>
        
        <Suspense fallback={<div>Loading...</div>}>
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 bg-primary/5 border-t border-primary/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">Baker Boonsa</h3>
            <p className="text-muted-foreground">Full-Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/Bakerboonsa11" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/bakerbonsa/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:bakerboonsa@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {new Date().getFullYear()} Baker Boonsa. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

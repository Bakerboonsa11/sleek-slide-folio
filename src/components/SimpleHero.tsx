"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Particles from "./Particles";

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <Particles className="absolute inset-0 z-0" />
      
      {/* Main Content */}
      <motion.div 
        className="relative z-20 text-center max-w-5xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Available for freelance work</span>
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="gradient-text">I Build Modern</span>
          <br />
          <span className="text-primary">Web Experiences</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          A passionate Full-Stack Developer specializing in creating beautiful, functional, and user-friendly digital experiences. Let's bring your ideas to life.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Download Resume */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="/BakerBoonsa_Resume.pdf" download>
              <Button variant="default" size="lg" className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 shadow-lg">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* View My Work */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={handleViewWork}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: Github, href: "https://github.com/Bakerboonsa11" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/bakerbonsa/" },
            { icon: Mail, href: "mailto:bakerboonsa@gmail.com" }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

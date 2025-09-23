"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Rocket, Users, BrainCircuit, Briefcase, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveCard from "./InteractiveCard";

const About = () => {
  const skills = [
    { name: "React", icon: <Code2 /> },
    { name: "TypeScript", icon: <Code2 /> },
    { name: "Next.js", icon: <Code2 /> },
    { name: "Node.js", icon: <Code2 /> },
    { name: "Python", icon: <Code2 /> },
    { name: "PostgreSQL", icon: <Code2 /> },
    { name: "Tailwind CSS", icon: <Palette /> },
    { name: "Framer Motion", icon: <Palette /> },
    { name: "Three.js", icon: <Palette /> },
    { name: "AWS", icon: <Briefcase /> },
    { name: "Docker", icon: <Briefcase /> },
    { name: "Git", icon: <Briefcase /> },
  ];

  const features = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: "Problem Solving",
      description: "I excel at breaking down complex problems into simple, elegant solutions."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "I have a passion for creating beautiful and intuitive user interfaces."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance First",
      description: "I build fast, responsive, and accessible websites and applications."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Player",
      description: "I am a strong communicator and collaborator, and I thrive in team environments."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        {/* Left Column: Image */}
        <motion.div 
          className="lg:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <InteractiveCard />
        </motion.div>

        {/* Right Column: Bio, Features, and Skills */}
        <div className="lg:col-span-2 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a full-stack developer with a passion for creating beautiful and functional digital experiences. I have a strong background in both front-end and back-end development, and I'm always eager to learn new technologies and take on new challenges.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Card className="p-6 h-full border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">My Toolkit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-primary/10 transition-colors"
                >
                  <div className="text-primary">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

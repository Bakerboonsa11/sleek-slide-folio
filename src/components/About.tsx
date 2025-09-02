"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL",
    "Tailwind CSS", "Framer Motion", "Three.js", "AWS", "Docker", "Git"
  ];

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Modern Design",
      description: "Creating beautiful, user-centered interfaces with the latest design trends."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and exceptional user experience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in teams to deliver successful projects on time."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Photo + Intro */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        {/* Floating photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <img
            src="/bonsa.jpg"
            alt="My Photo"
            className="rounded-3xl w-64 h-64 object-cover shadow-2xl border-4 border-white"
          />
        </motion.div>

        {/* Text + Features */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            I'm a passionate full-stack developer creating digital solutions that make a difference.
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </motion.p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Card className="glass-card p-6 text-center cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card p-8 rounded-3xl"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Technologies & Tools</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="px-4 py-2 text-sm bg-gradient-primary/10 border-primary/20 hover-glow transition-all duration-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

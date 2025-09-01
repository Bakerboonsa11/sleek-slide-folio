import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Rocket, Users } from "lucide-react";

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
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a passionate full-stack developer with 5+ years of experience creating 
          digital solutions that make a difference. I love turning complex problems 
          into simple, beautiful, and intuitive designs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="glass-card p-6 text-center hover-lift group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>

      <div className="glass-card p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Technologies & Tools</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="px-4 py-2 text-sm bg-gradient-primary/10 border-primary/20 hover-glow transition-all duration-300"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
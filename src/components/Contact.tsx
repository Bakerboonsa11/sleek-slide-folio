"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "bakerboonsa@gmail.com",
      href: "mailto:bakerboonsa@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+251 949 303 825",
      href: "tel:+251949303825"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Ethiopia",
      href: "#"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to bring your ideas to life? Let's collaborate and create 
          something amazing together. I'm always excited to work on new projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  placeholder="Your name" 
                  className="bg-background/50 border-glass-border focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-background/50 border-glass-border focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input 
                placeholder="Project inquiry" 
                className="bg-background/50 border-glass-border focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="Tell me about your project..." 
                rows={6}
                className="bg-background/50 border-glass-border focus:border-primary resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-primary hover:opacity-90 glow"
              size="lg"
            >
              Send Message
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to say hello, 
              feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg border border-glass-border hover:border-primary/50 transition-colors hover-lift group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* CTA Card */}
          <Card className="glass-card p-8 text-center bg-gradient-primary/5">
            <h4 className="text-xl font-bold mb-4">Ready to Start?</h4>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project and turn your vision into reality.
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Schedule a Call
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

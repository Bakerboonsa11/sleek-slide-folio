"use client";

import { useState, useEffect, useRef } from 'react';

const Particles = ({ className, quantity = 100 }) => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    class Particle {
      constructor(x, y, size, color, weight) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.weight = weight;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        this.size -= 0.05;
        if (this.size < 0) {
          this.x = (mousePosition.x + (Math.random() * 20) - 10);
          this.y = (mousePosition.y + (Math.random() * 20) - 10);
          this.size = (Math.random() * 10) + 2;
          this.weight = (Math.random() * 2) - 0.5;
        }
        this.y += this.weight;
        this.weight += 0.2;

        if (this.y > canvas.height - this.size) {
          this.weight *= -0.5;
        }
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < quantity; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = (Math.random() * 5) + 2;
        const color = 'rgba(147, 112, 219, 0.5)';
        const weight = 1;
        particles.push(new Particle(x, y, size, color, weight));
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [quantity, mousePosition]);

  return <canvas ref={canvasRef} className={className} />;
};

export default Particles;

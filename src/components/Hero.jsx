import React, { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = "#ffffff"; // White particles
      }

      update(particles) {
        // Mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            this.vx -= Math.cos(angle) * force * 0.5;
            this.vy -= Math.sin(angle) * force * 0.5;
          }
        }

        // Particle-to-particle repulsion
        particles.forEach((p) => {
          if (p === this) return;
          const dx = this.x - p.x;
          const dy = this.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.size * 2 + 2) {
            const angle = Math.atan2(dy, dx);
            const repulse = (2 - dist / (this.size * 2)) * 0.05;
            this.vx += Math.cos(angle) * repulse;
            this.vy += Math.sin(angle) * repulse;
          }
        });

        // Move particle
        this.x += this.vx;
        this.y += this.vy;

        // Boundary check
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Slow down
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Keep minimum speed
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed < 0.5) {
          this.vx += (Math.random() - 0.5) * 0.1;
          this.vy += (Math.random() - 0.5) * 0.1;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 5000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connections
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            let alpha = 0.3 * (1 - distance / 130);
            // Increase opacity near mouse
            if (mouse.x !== null && mouse.y !== null) {
              const mx = (particles[i].x + particles[j].x) / 2 - mouse.x;
              const my = (particles[i].y + particles[j].y) / 2 - mouse.y;
              const mdist = Math.sqrt(mx * mx + my * my);
              if (mdist < 150) alpha = 0.8;
            }

            ctx.strokeStyle = "#ffffff";
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Mouse events
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(particles);
        particle.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />

      <div className="relative z-10 text-left px-6 sm:pl-12 lg:pl-24 mt-10 lg:mt-20">
        <h1
          className="text-white text-2xl sm:text-6xl lg:text-8xl font-bold leading-none mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          SHOWCASE YOUR BRAND
        </h1>

        <h1
          className="text-white text-2xl sm:text-6xl lg:text-8xl font-bold leading-none flex items-baseline gap-2 -mt-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WITH A SITE THAT{" "}
          <span
            className="text-6xl sm:text-8xl lg:text-[11rem]"
            style={{ fontFamily: "'Qwitcher Grypen', cursive" }}
          >
            speaks.
          </span>
        </h1>

        <button
          className="sm:hidden mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all"
          onClick={() => (window.location.href = "/contact")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  vz: number;
  baseOpacity: number;
  currentOpacity: number;
  vx: number;
  vy: number;
  targetVx: number;
  targetVy: number;
  twinkleCycle: number;
  baseSize: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
  const animationRef = useRef<number>();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize stars with better distribution
    const starCount = Math.max(
      150,
      Math.min(
        400,
        Math.floor((window.innerWidth * window.innerHeight) / 5000),
      ),
    );
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 0.5 + 0.3,
      vz: Math.random() * 0.0004 + 0.0001,
      baseOpacity: Math.random() * 0.6 + 0.2,
      currentOpacity: Math.random() * 0.6 + 0.2,
      vx: 0,
      vy: 0,
      targetVx: 0,
      targetVy: 0,
      twinkleCycle: Math.random() * Math.PI * 2,
      baseSize: Math.random() * 0.8 + 0.4,
    }));

    // Smooth mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      mouseRef.current.vx = (newX - mouseRef.current.x) * 0.1;
      mouseRef.current.vy = (newY - mouseRef.current.y) * 0.1;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const attractRadius = 250;
      const repelRadius = 50;

      frameCount++;

      stars.forEach((star) => {
        // Smooth twinkling animation
        star.twinkleCycle += 0.02;
        const twinkle = Math.sin(star.twinkleCycle) * 0.3 + 0.7;

        // Distance to mouse
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distanceSq = dx * dx + dy * dy;
        const distance = Math.sqrt(distanceSq);

        // Smooth, physics-based cursor interaction
        if (distance < attractRadius && distance > 1) {
          const influence = Math.max(0, 1 - distance / attractRadius);
          const easeInfluence = influence * influence; // Smooth easing

          if (distance > repelRadius) {
            // Attraction with smooth acceleration
            const force = easeInfluence * 0.08;
            star.targetVx = (dx / distance) * force * 2;
            star.targetVy = (dy / distance) * force * 2;
            star.currentOpacity =
              star.baseOpacity + easeInfluence * 0.4 * twinkle;
          } else {
            // Repulsion when too close
            const repelForce = (1 - distance / repelRadius) * 0.15;
            star.targetVx = -(dx / distance) * repelForce;
            star.targetVy = -(dy / distance) * repelForce;
            star.currentOpacity = star.baseOpacity + 0.5;
          }
        } else {
          // Gradual return to idle state
          star.targetVx *= 0.95;
          star.targetVy *= 0.95;
          star.currentOpacity = star.baseOpacity * twinkle;
        }

        // Smooth velocity interpolation
        star.vx += (star.targetVx - star.vx) * 0.08;
        star.vy += (star.targetVy - star.vy) * 0.08;

        // Apply strong damping for smooth motion
        star.vx *= 0.94;
        star.vy *= 0.94;

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Depth cycling
        star.z += star.vz;
        if (star.z > 1) {
          star.z = Math.random() * 0.2;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.vx = 0;
          star.vy = 0;
          star.baseOpacity = Math.random() * 0.6 + 0.2;
          star.baseSize = Math.random() * 0.8 + 0.4;
        }

        // Wrap around edges
        if (star.x < -50) star.x = canvas.width + 50;
        if (star.x > canvas.width + 50) star.x = -50;
        if (star.y < -50) star.y = canvas.height + 50;
        if (star.y > canvas.height + 50) star.y = -50;

        // Size based on depth with better scaling
        const size = star.baseSize * (star.z * 0.6 + 0.4);

        // Draw outer glow (nebula effect) - reduced radius, increased brightness
        ctx.fillStyle = `rgba(120, 170, 220, ${star.currentOpacity * 0.35})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Draw middle glow - increased brightness
        ctx.fillStyle = `rgba(150, 200, 255, ${star.currentOpacity * 0.5})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Draw core with bright color
        ctx.fillStyle = `rgba(220, 240, 255, ${star.currentOpacity * 1.1})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center - increased brightness
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.currentOpacity * 0.85)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

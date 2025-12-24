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
  pulsePhase: number;
  driftPhase: number;
  burstForce: number;
  burstDecay: number;
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
    const maxStarCount = starCount * 1.5; // Allow up to 50% more stars for respawning

    const createStar = (): Star => ({
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
      pulsePhase: Math.random() * Math.PI * 2,
      driftPhase: Math.random() * Math.PI * 2,
      burstForce: 0,
      burstDecay: 0,
    });

    starsRef.current = Array.from({ length: starCount }, createStar);

    const refs = {
      maxStarCount,
      createStar,
      lastDensityCheck: 0,
    };

    // Smooth mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      mouseRef.current.vx = (newX - mouseRef.current.x) * 0.1;
      mouseRef.current.vy = (newY - mouseRef.current.y) * 0.1;
      mouseRef.current.x = newX;
      mouseRef.current.y = newY;
    };

    // Handle click burst effect
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Only trigger burst on non-clickable areas (not buttons, links, inputs, etc.)
      const isClickable = target.closest(
        "button, a, input, textarea, [role='button'], [onclick]"
      );

      if (!isClickable && target !== canvas) {
        const clickX = e.clientX;
        const clickY = e.clientY;
        const burstRadius = 150;

        // Apply burst force to nearby stars
        starsRef.current.forEach((star) => {
          const dx = star.x - clickX;
          const dy = star.y - clickY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < burstRadius && distance > 1) {
            const influence = Math.max(0, 1 - distance / burstRadius);
            star.burstForce = influence * 0.8; // Peak burst intensity
            star.burstDecay = 0;
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stars = starsRef.current;
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const attractRadius = 300;
      const repelRadius = 35;
      const mouseVelocity = Math.sqrt(
        mouseRef.current.vx ** 2 + mouseRef.current.vy ** 2,
      );

      frameCount++;

      stars.forEach((star) => {
        // Smooth twinkling animation
        star.twinkleCycle += 0.02;
        const twinkle = Math.sin(star.twinkleCycle) * 0.3 + 0.7;

        // Pulse animation for interactive effect
        star.pulsePhase += 0.03;
        const pulse = Math.sin(star.pulsePhase) * 0.15 + 1;

        // Subtle drift animation for idle stars
        star.driftPhase += 0.01;
        const driftX = Math.sin(star.driftPhase) * 0.02;
        const driftY = Math.cos(star.driftPhase * 0.7) * 0.02;

        // Distance to mouse
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distanceSq = dx * dx + dy * dy;
        const distance = Math.sqrt(distanceSq);

        // Enhanced, physics-based cursor interaction with velocity awareness
        if (distance < attractRadius && distance > 1) {
          const influence = Math.max(0, 1 - distance / attractRadius);
          const easeInfluence = influence * influence * influence; // Cubic easing for smoother acceleration

          if (distance > repelRadius) {
            // Attraction with faster response and velocity-aware force
            const baseForce = easeInfluence * 0.22;
            const velocityBoost = mouseVelocity * 0.08;
            const totalForce = baseForce + velocityBoost;

            star.targetVx = (dx / distance) * totalForce * 2.8;
            star.targetVy = (dy / distance) * totalForce * 2.8;
            star.currentOpacity =
              star.baseOpacity + easeInfluence * 0.5 * twinkle;
          } else {
            // Repulsion when too close - stronger and more dynamic
            const repelForce =
              (1 - distance / repelRadius) * (0.25 + mouseVelocity * 0.15);
            star.targetVx = -(dx / distance) * repelForce;
            star.targetVy = -(dy / distance) * repelForce;
            star.currentOpacity = star.baseOpacity + 0.6;
          }
        } else {
          // Gradual return to idle state with subtle drift
          star.targetVx = driftX;
          star.targetVy = driftY;
          star.currentOpacity = star.baseOpacity * twinkle;
        }

        // Smooth velocity interpolation with improved responsiveness for faster attraction
        star.vx += (star.targetVx - star.vx) * 0.18;
        star.vy += (star.targetVy - star.vy) * 0.18;

        // Apply smooth damping for fluid motion
        star.vx *= 0.93;
        star.vy *= 0.93;

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
          star.pulsePhase = Math.random() * Math.PI * 2;
          star.driftPhase = Math.random() * Math.PI * 2;
        }

        // Wrap around edges
        if (star.x < -50) star.x = canvas.width + 50;
        if (star.x > canvas.width + 50) star.x = -50;
        if (star.y < -50) star.y = canvas.height + 50;
        if (star.y > canvas.height + 50) star.y = -50;

        // Size based on depth with pulse effect for interactivity
        const baseSize = star.baseSize * (star.z * 0.6 + 0.4);
        const size = baseSize * pulse;

        // Draw outer glow (nebula effect) with enhanced visibility
        ctx.fillStyle = `rgba(120, 170, 220, ${star.currentOpacity * 0.4})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw middle glow - more prominent
        ctx.fillStyle = `rgba(150, 200, 255, ${star.currentOpacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 1.4, 0, Math.PI * 2);
        ctx.fill();

        // Draw core with bright color
        ctx.fillStyle = `rgba(220, 240, 255, ${star.currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center - enhanced glow
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, star.currentOpacity * 0.95)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size * 0.6, 0, Math.PI * 2);
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

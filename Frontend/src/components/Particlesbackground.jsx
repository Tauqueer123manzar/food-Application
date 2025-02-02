import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground= () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // tsParticles engine initialization
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => setIsLoaded(true));
  }, []);

  const particleOptions = useMemo(() => ({
    background: {
      // color: { value: "#f76325" }
     color: { value: "rgb(180,70,80)" }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 6 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.8,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        // transition:{duration: 0.5},
        outModes: { default: "bounce" },
      },
      number: { value: 80, density: { enable: true } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

  return isLoaded ? (
    <Particles
      id="tsparticles"
      options={particleOptions}
    />
  ) : null;
};

export default ParticlesBackground;
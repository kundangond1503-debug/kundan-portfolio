import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#050816",
        },
      },
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: "#22d3ee",
        },
        links: {
          enable: true,
          color: "#22d3ee",
          distance: 150,
        },
        move: {
          enable: true,
          speed: 2,
        },
        size: {
          value: 2,
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;
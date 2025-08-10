import { useEffect, useMemo, useState } from 'react';

import type { ISourceOptions } from '@tsparticles/engine';
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

/**
 * Global starry background using tsparticles.
 * - Twinkling (opacity animation) and slow movement
 * - Random initial placement on each reload (default behavior)
 * - Occasional falling stars via emitters
 * - Full screen, non-interactive, behind the content
 */
// TODOM: check everything
export default function BackgroundStars() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Initialize engine with slim bundle and emitters plugin
    initParticlesEngine(async engine => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
    }).then(() => setReady(true));
  }, []);

  // TODOM: do I need use memo here?
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: 0 },
      background: { color: { value: 'transparent' } },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: { enable: false, mode: [] },
          onHover: { enable: false, mode: [] },
          resize: { enable: true },
        },
        modes: {},
      },
      particles: {
        number: {
          value: 150,
          density: { enable: true, area: 1200 },
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.2, max: 0.8 },
          animation: {
            enable: true,
            speed: 0.5, // gentle twinkle
            minimumValue: 0.1,
            sync: false,
          },
        },
        size: {
          value: { min: 0.5, max: 2.0 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.15, // slow drift
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      // Occasional falling stars (shooting stars)
      emitters: [
        {
          autoPlay: true,
          life: { wait: true }, // emit only during bursts
          rate: {
            quantity: 1,
            // Occasionally: one every 8-20 seconds (randomized in particles options below)
            delay: 12, // base delay; randomness is applied via random spawn positions and speeds
          },
          // Start near the top, random horizontal position
          position: { x: 0, y: 0 }, // will be overridden per emit by randomSpawn options
          size: { width: 0, height: 0 },
          spawnColor: { value: '#ffffff' },
          particles: {
            number: { value: 0 },
            life: { duration: { value: { min: 1.2, max: 2.2 } }, delay: { value: 0 } },
            move: {
              enable: true,
              speed: { min: 20, max: 35 },
              direction: 'bottom-right',
              straight: true,
              gravity: { enable: false },
              outModes: { default: 'out' },
              trail: { enable: true, length: 10, fillColor: '#00000000' },
            },
            opacity: { value: { min: 0.6, max: 1 } },
            size: { value: { min: 1, max: 2 } },
            shape: { type: 'circle' },
          },
        },
      ],
      // Engine randomizes particle starting positions by default; reseeding occurs each load.
    }),
    []
  );

  if (!ready) return null;

  return <Particles id='tsparticles-stars-bg' options={options} style={{ pointerEvents: 'none' }} />;
}

import { useEffect, useState } from 'react';

import { loadTrailEffect } from '@tsparticles/effect-trail';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const options: ISourceOptions = {
  fullScreen: { enable: true, zIndex: 0 },
  background: { color: { value: 'transparent' } },
  detectRetina: true,
  fpsLimit: 60,
  particles: {
    number: {
      value: 150,
      density: { enable: true },
    },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: { min: 0.2, max: 0.8 },
      animation: {
        enable: true,
        speed: 0.5,
        startValue: 'random',
        sync: false,
      },
    },
    size: {
      value: { min: 0.5, max: 1.5 },
      animation: {
        enable: true,
        speed: 0.3,
        startValue: 'random',
        sync: false,
      },
    },
  },
};

/**
 * Global starry background using tsparticles.
 * - Twinkling (opacity animation)
 * - Random initial placement on each reload (default behavior)
 * - Full screen, non-interactive, behind the content
 */
export default function BackgroundStars() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
      await loadTrailEffect(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) {
    return null;
  }

  return <Particles id='tsparticles-stars-bg' options={options} className='pointer-events-none' />;
}

import createGlobe from "cobe";
import React from "react";
import { useEffect, useRef } from "react";
import styles from './index.module.css'

// https://github.com/shuding/cobe

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  if (!canvasRef) {
    return null
  }

  useEffect(() => {
    let phi = 0;
    let width = 0

    const onResize = () => {
      canvasRef.current && (width = canvasRef.current.offsetWidth)
      // canvasRef.current.width = window.innerWidth
      // console.log('canvas', canvasRef.current.width)
    }
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [30.274084, 120.155067], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2
        state.height = width * 2
      }
    });

    setTimeout(() => (canvasRef.current.style.opacity = '1'))
    return () => {
      window.removeEventListener('resize', onResize)
      globe.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.globe}
      />
    </div>
  );
}

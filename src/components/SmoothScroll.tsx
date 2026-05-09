"use client";
// The new official import path
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.1, 
        duration: 1.5, 
        smoothWheel: true,
        // syncTouch: true // Optional: enables smooth scroll on touch devices too
      }}
    >
      {children}
    </ReactLenis>
  );
}
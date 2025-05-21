// components/SectionFadeWrapper.jsx
import React from "react";

export default function SectionFadeWrapper({ children }) {
  return (
    <section className="relative w-full bg-secondary-background">
      {/* Fade superior: del fondo primario → transparente */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-8"
        style={{
          background:
            "linear-gradient(to bottom, #0f0f0f 0%, rgba(17,24,39,0) 100%)",
        }}
      />

      {/* Contenido: el hijo se encarga de su propio padding/margin */}
      {children}

      {/* Fade inferior: del fondo primario → transparente */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8"
        style={{
          background:
            "linear-gradient(to top, #0f0f0f 0%, rgba(17,24,39,0) 100%)",
        }}
      />
    </section>
  );
}

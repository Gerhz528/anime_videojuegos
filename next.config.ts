import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',       // 👈 Convierte el proyecto en HTML/CSS/JS estático
  images: {
    unoptimized: true,    // 👈 Obligatorio para que las imágenes funcionen sin servidor
  },
  trailingSlash: true,    // 👈 Ayuda a que los enlaces funcionen bien en local
};

export default nextConfig;
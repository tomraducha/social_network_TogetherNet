import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // Définit la racine de l'URL de base de l'application
  base: process.env.BASE_URL ?? "/",
  plugins: [
    // Ajoute le plugin VitePWA pour ajouter une prise en charge PWA à l'application
    VitePWA({
      // Type d'inscription automatique pour les mises à jour
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        name: "TogetherNet",
        description: "Le reseau social du futur",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      }
    }),
  ],
});

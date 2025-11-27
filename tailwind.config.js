/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs (for Tailwind CSS 3.*)

import animations from '@midudev/tailwind-animations'

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        fadeInImage: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        // ⭐ NUEVA animación pro para el Pop-up
        popupFade: {
          "0%": { opacity: 0, transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },

      animation: {
        fadeInImage: "fadeInImage 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.25s ease-in-out",

        // ⭐ Animación del pop-up
        popupFade: "popupFade 0.4s ease-out",
      },
    },
  },

  darkMode: "class",

  // Plugins
  plugins: [
    animations
  ],
};

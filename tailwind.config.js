/** @type {import('tailwindcss').Config} */
// tailwind.config.mjs

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
        popupFade: {
          "0%": { opacity: 0, transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },

        // ⭐ Float suave infinito
        floatSoft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },

      animation: {
        fadeInImage: "fadeInImage 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.25s ease-in-out",
        popupFade: "popupFade 0.4s ease-out",

        // ⭐ Float suave (este faltaba)
        floatSoft: "floatSoft 3s ease-in-out infinite",
      },
    },
  },

  darkMode: "class",

  plugins: [
    animations,
  ],
};

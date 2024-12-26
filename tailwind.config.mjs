/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navbar-primary": "#2557fc",
        "navbar-secondary": "#67a2ea",
        "navbar-dark-bg": "#212031",
        // Technology's Primary colors
        "html-primary": "#f06b51",
        "css-primary": "#0396DE",
        "javascript-primary": "#f0db4f",
        "typescript-primary": "#5b92d1",
        "angular-primary": "#ec3c88",
        "tailwind-primary": "#38BDF8",
        "bootstrap-primary": "#8b6bba",
        "firebase-primary": "#FFCD32",
        "astro-primary": "#ccd9ff",
        "php-primary": "#a6a9c4",
        "nodejs-primary": "#6da565",
        "ionic-primary": "#3880FF",
        // Technology's Secondary colors
        "html-secondary": "#a04231",
        "css-secondary": "#c9d1e2",
        "javascript-secondary": "#f0db4f",
        "typescript-secondary": "#c9d8e0",
        "angular-secondary": "#42001c",
        "tailwind-secondary": "#85d5f7",
        "bootstrap-secondary": "#c9bae0",
        "firebase-secondary": "#915900",
        "php-secondary": "#ccd3e8",
      },
    },
  },
  plugins: [],
};

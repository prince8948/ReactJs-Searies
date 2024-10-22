# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# working with tailwind CSS
## install tailwind css using cmd 
  this command hepl us to css in our projects
- npm install -D tailwindcss
- npx tailwindcss init
## change you config file of tailwind css
- /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

## Add the Tailwind directives to your CSS
- import in you main css file index.css
@tailwind base;
@tailwind components;
@tailwind utilities;


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#342a61',
        'sky-blue': '#0eb9dc'
      },
      fontFamily:{
        "rubik-bold":['rubik-bold']
      }
    },
  },
  plugins: [],
}


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // enable class strategy so `document.documentElement.classList.add('dark')` works
  theme: {
    extend: {},
  },
  plugins: [],
};

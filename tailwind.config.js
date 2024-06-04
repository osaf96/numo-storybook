/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Adjust paths to include your Angular and Storybook files
    './.storybook/**/*.{js,ts}', // Include Storybook configuration files
    './stories/**/*.{js,ts,html}', // Include Storybook stories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


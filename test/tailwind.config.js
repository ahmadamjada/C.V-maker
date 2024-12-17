/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./new.html', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin'), require('@tailwindcss/forms')],
}


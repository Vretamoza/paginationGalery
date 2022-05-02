module.exports = {
  content: ['public/index.html', 'public/js/utils.js', 'public/js/script.js',  "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'oleo': ['Oleo Script Swash Caps', 'cursive']
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

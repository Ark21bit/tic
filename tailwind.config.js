/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",    
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    fontSize: {
      'xs': ['0.75rem', '1.2'],
      'sm': ['0.875rem', '1.2'],
      'base': ['1rem', '1.2'],
      'lg': ['1.125rem', '1.2'],
      'xl': ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1.2'],
      '4xl': ['2.25rem', '1.2'],
      '5xl': ['3rem', '1.2'],
      '6xl': ['3.75rem', '1.2'],
      '7xl': ['4.5rem', '1.2'],
      '8xl': ['6rem', '1.2'],
      '9xl': ['8rem', '1.2'],
    },
    gridTemplateColumns: {     
      '1':'[full-start] repeat(1, minmax(0, 1fr)) [full-end]',
      '2':'[full-start] repeat(2, minmax(0, 1fr)) [full-end]',
      '3':'[full-start] repeat(3, minmax(0, 1fr)) [full-end]',
      '4':'[full-start] repeat(4, minmax(0, 1fr)) [full-end]',
      '5':'[full-start] repeat(5, minmax(0, 1fr)) [full-end]',
      '6':'[full-start] repeat(6, minmax(0, 1fr)) [full-end]',
      '7':'[full-start] repeat(7, minmax(0, 1fr)) [full-end]',
      '8':'[full-start] repeat(8, minmax(0, 1fr)) [full-end]',
      '9':'[full-start] repeat(9, minmax(0, 1fr)) [full-end]',
      '10':'[full-start] repeat(10, minmax(0, 1fr)) [full-end]',
      '11':'[full-start] repeat(11, minmax(0, 1fr)) [full-end]',
      '12':'[full-start] repeat(12, minmax(0, 1fr)) [full-end]',      
    },
    extend:{
      colors: {
        'fblack': '#333',
        'fred': '#E7363D',
        'finactive': '#CFCFCF',
        'fgreen': '#2DBBB5',
        'fmainText': '#A3A3A3',
        'ftext': '#B6C5D5',
        'ftext2': '#676767',
        'ftext3': '#505050',
        'fline': '#E8E8E8',
      },
      fontFamily: {
        'Onest': ['Onest', 'sans-serif'],      
        'Inter': ['Inter', 'sans-serif'],      
      },
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp')
  ],
}
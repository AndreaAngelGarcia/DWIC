/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components//.{html,js}',
    './pages/**/.{html,js}',
    './index.html',],
  theme: {
    extend: {
      colors: {
        "azulClaro": "#37bcf9"
      },
      animation: {

      }
    },
  },
  variants: {
    extend: {
        animation:['responsive', 'hover', 'group-hover'],
        fontSize:['responsive', 'hover', 'group-hover'],
        transform:['responsive', 'hover', 'group-hover'],
        scale:['responsive', 'hover', 'group-hover']
    }
  }
}


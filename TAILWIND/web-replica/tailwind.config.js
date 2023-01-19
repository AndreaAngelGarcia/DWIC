/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components//.{html,js}',
    './pages/**/.{html,js}',
    './index.html',],
    variants: {
      extend: {
          animation:['responsive', 'hover', 'group-hover'],
          fontSize:['responsive', 'hover', 'group-hover'],
          transform:['responsive', 'hover', 'group-hover'],
          scale:['responsive', 'hover', 'group-hover']
      }
    },
  theme: {
    extend: {
      keyframes: {
        rotateGear: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fromBellow: {
          '0%': { transform: 'translateY(0px)' },
          '50%': {transform: 'translateY(56px)'},
          '100%': { transform: 'translateY(0px)' },
        }
      },
      colors: {
        "azulClaro": "#37bcf9"
      },
      animation: {
        'rotate-gear': 'rotateGear ',
        'from-bellow': 'fromBellow 500ms linear',
      }
    },
  }  
}


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
        fromBellow: {
          '0%': { transform: 'translateY(0px)'  },
          '50%': {transform: 'translateY(56px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
      },
      colors: {
        "azulClaro": "#37bcf9"
      }     
    },
  }  
}


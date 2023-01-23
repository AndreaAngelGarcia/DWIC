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
        },
        rotateGear: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }, 
        fromRight: {
          '0%': { transform: 'translateX(56px)'  },
          '100%': { transform: 'translateX(0px)' },
        }
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear'
      },
      colors: {
        "azulClaro": "#37bcf9"
      }     
    },
  }  
}


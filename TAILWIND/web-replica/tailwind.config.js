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
          scale:['responsive', 'hover', 'group-hover'],
          borderRadius:['responsive', 'hover', 'group-hover'],
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
        },
        backBanner: {
          '0%': { 'background-position': '0px 0px'},
          '100%': {'background-position': '-200px -200px'}
        },
        showText: {
          '0%' : {transform: 'translateX(-600%) scale(5,5)',
                  opacity: '1' },
          '50%' : {transform: 'translateX(600%) scale(5,5)',
                  opacity: '1'},
          '75%' : {transform: 'translateX(-600%) scale(5,5)',
                  'text-shadow': 'none',
                  color: 'transparent',
                  opacity: '0'},
          '100%' : {transform: 'translateX(0%) scale(1,1)',
                  'text-shadow': '2px 2px 1px black',
                  color: 'white',
                  opacity: '1'},
          },
        showIcon: {
          'from': { transform: "translateY(-200%)" },
          'to': { transform: "translateY(0%)" }
        },
        showCategory: {
          'from': { transform: "translateY(-300%)" },
          'to': { transform: "translateY(0%)" }
        },
        showDescription: {
          'from': { transform: "translateX(-300%)" },
          'to': { transform: "translateX(0%)" }
        },
        blink: {
          '0%':{border: '10px solid #37bcf9'},
          '25%': {border: '10px solid green'},
          '50%':{border: '10px solid yellow'},
          '75%':{border: '10px solid white'},
          '100%':{border: '10px solid #37bcf9'}
        }
      },
      height: {
        banner: '100px',
        menu: '70px',
        footer: '470px'
      },
      width: {
        banner: '95.5%'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 300ms linear',
        'back-banner' : 'backBanner 10s linear',
        'show-text' : 'showText 10s linear',
        'show-icon': 'showIcon 300ms linear',
        'show-category': 'showCategory 400ms linear',
        'show-description': 'showDescription 400ms linear',
        'blink': 'blink 10s infinite linear'
      },
      colors: {
        "azulClaro": "#37bcf9",
        "azulMedio": "#0072c6",
        "azulOscuro": "#00538c",
        "azulp":"#0370b9",
        "azulLogin":"#2f78bc",
        "gris": "#555",
        "grisOscuro":"#393d3f",
        "negro": "#333"
      }, 
      boxShadow: {
        'lateral-h3': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f',
        'articles': '1px 1px 2px #ddd',
        'articles-h2': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f',
        'blog': '0px 0px 10px gray'
      }  
    },
  }  
}


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
        
      },
      height: {
        /*banner: '100px',
        menu: '70px',
        footer: '470px'*/
      },
      width: {
      },
      animation: {
        
      },
      colors: {
      }, 
      boxShadow: {
      },
      screens: {
        'xl': {'max:': '1250px'},
        '1080':{'max': '1080px'},
        '970':{'max': '970px'},
        '925':{'max': '925px'},
        '899':{'max': '899px'},
        '799':{'max': '799px'},
        '724':{'max': '724px'},
        '660':{'max': '660px'},
        '475':{'max': '475px'}
      }
    },
  }  
}


/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            inter: 'Inter',
         },
         colors: {
            primary: '#1c1b1b',
            light: '#EEEFEE',
         },
         backgroundImage: {
            home: 'url(/src/assets/home/home-bg.png)',
            footer: 'url(/src/assets/footer.png)',
         },
      },
   },
   plugins: [require('daisyui')],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        button: '10px',
        card: '20px',
      },
      backgroundImage: {
        hero: 'url("/src/assets/background.png")',
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
        title: 'DM Sans, sans-serif',
      },
      fontSize: {
        xxs: '0.625rem', // 10px
      },
      boxShadow: {
        select: '0px 2px 24px #F5EAEA',
      },
      colors: {
        marketplace: {
          orange: {
            base: '#F24D0D',
            dark: '#C43C08',
          },
          blue: {
            light: '#D7EFF9',
            base: '#5EC5FD',
            dark: '#009CF0',
          },
          shape: {
            white: '#FFFFFF',
            background: '#FBF4F4',
            shape: '#F5EAEA',
          },
          gray: {
            100: '#ADADAD',
            200: '#949494',
            300: '#666666',
            400: '#3D3D3D',
            500: '#1D1D1D',
          },
          danger: '#DC3545',
          success: '#28A745',
        },
      },
    },
  },
  plugins: [],
}

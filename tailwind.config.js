/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1:"rgb(245, 45, 58)",
        color2:"rgb(108, 117, 125)",
        color3:"rgba(255, 255, 255, 0.1)",
        color4:"#f3434e35",
        color5:"rgb(184 93 245)",
        color6:"#0564f9",
        color7:"#0ac8f8",
        borderColor1:"#515151",

      },
      backgroundImage: {
        'primary1': 'linear-gradient(90deg, rgba(184, 93, 245, 1) 0%, rgba(245, 45, 58, 1) 100%)',
        'primary2':'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 40%, rgba(0, 0, 0, 0) 100%);',
        'primary3':'linear-gradient(90deg, rgba(184, 93, 245, 0.3) 0%, rgba(245, 45, 58, 0.3) 100%)',
        'primary4':'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 40%, rgba(0, 0, 0, 0) 100%);'
      },
      boxShadow: {
        'custom-purple': '0px 0px 15px rgba(28,197,245,250)',
        'custom':'2px 2px 14px rgba(0, 0, 0, 0.4)'
      },

      fontFamily: {
        Poppins500: ["Poppins-500",],
        Poppins600: ["Poppins-600",],
        Poppins700: ["Poppins-700",],

      },
    },
    screens: {
      xs: "475px",
      ls: "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1636px",
    },
  },
  plugins: [],
};

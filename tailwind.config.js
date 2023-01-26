/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            transitionDuration: {
                DEFAULT: '250ms'
            }
        },
        screens: {
            lg: '800px'
        }
    },
    plugins: [],
}

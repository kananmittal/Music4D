/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'accent-blue': '#007bff',
                'text-main': '#333333',
                'text-heading': '#222222',
                'text-secondary': '#666666',
            },
            fontFamily: {
                sans: ['"Libre Franklin"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

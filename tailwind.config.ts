module.exports = {
    content: [
        './src/**/*.{html,js,ts,jsx,tsx}',
        './index.html',
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ['night']
    },
    plugins: [
        require('daisyui'),
    ],
};
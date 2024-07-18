// greet.js

// Function to greet with multiple language support
function greet(language) {
    switch (language) {
        case 'en':
            return 'Hello!';
        case 'fr':
            return 'Bonjour !';
        case 'es':
            return '¡Hola!';
        default:
            return 'Hello!';
    }
}

// AlpineJS component for the greet function
document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', () => ({
        language: 'en',
        get greeting() {
            return greet(this.language);
        }
    }));
});
// transportFee.js

// Function to calculate transport fee based on shift
function calculateTransportFee(shift) {
    switch (shift) {
        case 'morning':
            return 'R10';
        case 'afternoon':
            return 'R15';
        case 'evening':
            return 'R20';
        default:
            return 'Select a shift';
    }
}

// AlpineJS component for the transport fee function
document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', () => ({
        shift: null,
        get fee() {
            return calculateTransportFee(this.shift);
        }
    }));
});
// totalPhoneBill.js

export function totalPhoneBill(data) {
    const items = data.split(', ');

    let callCount = 0;
    let smsCount = 0;

    items.forEach(item => {
        if (item === 'call') {
            callCount++;
        } else if (item === 'sms') {
            smsCount++;
        }
    });

    const callCost = callCount * 2.75;
    const smsCost = smsCount * 0.65;

    const totalBill = callCost + smsCost;

    return 'R' + totalBill.toFixed(2);
}
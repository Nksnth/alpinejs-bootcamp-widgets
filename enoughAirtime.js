// enoughAirtime.js

export function enoughAirtime(projectedUsage, airtimeAvailable) {
    const actions = projectedUsage.split(',');

    const callCost = 1.88;
    const dataCost = 12;
    const smsCost = 0.75;

    let totalCost = 0;

    actions.forEach(action => {
        if (action.trim() === 'call') {
            totalCost += callCost;
        } else if (action.trim() === 'data') {
            totalCost += dataCost;
        } else if (action.trim() === 'sms') {
            totalCost += smsCost;
        }
    });

    const airtimeLeft = airtimeAvailable - totalCost;

    return airtimeLeft >= 0 ? 'R' + airtimeLeft.toFixed(2) : 'R0.00';
}

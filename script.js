document.getElementById('credit-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const years = parseFloat(document.getElementById('years').value) * 12;

    const x = Math.pow(1 + interest, years);
    const monthlyPayment = (amount * x * interest) / (x - 1);

    if (!isNaN(monthlyPayment) && (monthlyPayment !== Infinity) && (monthlyPayment > 0)) {
        document.getElementById('result').innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = 'Please check your inputs.';
    }
});
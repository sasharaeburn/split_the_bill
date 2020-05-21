let form = document.getElementById('calculate_total');
form.addEventListener('submit', event => {
    event.preventDefault();

    let result = calculatePaidAmount();

    displayResult(result);
})

function calculatePaidAmount() {
    const paidAmount = document.getElementById('paid_amount').value;
    const peopleAmount = document.getElementById('people_amount').value;
    const tip = document.getElementById('tip').value;

    let newPaidAmount = parseFloat(paidAmount);
    let newPeopleAmount = parseFloat(peopleAmount);
    let newTip = parseFloat(tip);

    let total = newPaidAmount + (newPaidAmount/100 * newTip);

    return total / newPeopleAmount;
}

function displayResult(result) {
    let showResult = document.getElementById('result');

    showResult.innerHTML = result + ' per person';
}
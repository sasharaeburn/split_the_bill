let clickButton = document.getElementById('calculate_button');
clickButton.addEventListener('click', event => {
    event.preventDefault();

    alert(calculatePaidAmount());
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



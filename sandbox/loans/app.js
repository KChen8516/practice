// UI variables
const loanForm = document.querySelector('.loan');

loanForm.addEventListener('submit', e => {
    // hide results
    document.querySelector('.results').style.display = 'none';
    document.querySelector('.loader').style.display = 'block';

    setTimeout(calculateResults, 1000);

    e.preventDefault();
});

function calculateResults() {
    
    // inputs
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');

    // results 
    const monthly = document.querySelector('#monthly-payment');
    const total = document.querySelector('#total-payment');
    const totalInterest = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calcInterest = parseFloat(interest.value) / 100 / 12;
    const calcPayments = parseFloat(years.value) * 12;

    // compute monthly payments
    const x = Math.pow(1 + calcInterest, calcPayments);
    const monthlyPayments = (principal * x * calcInterest) / (x - 1);

    // check for a finite number
    if(isFinite(monthlyPayments)) {
        monthly.value = monthlyPayments.toFixed(2);
        total.value = (monthlyPayments * calcPayments).toFixed(2);
        totalInterest.value = ((monthlyPayments * calcPayments) - principal).toFixed(2);
        // display the results
        document.querySelector('.results').style.display = 'block';
        // hide spinner
        document.querySelector('.loader').style.display = 'none';
    } else {
        console.log('Please check numbers');

         // hide spinner
         document.querySelector('.loader').style.display = 'none';
    }
    
    // e.preventDefault();
}
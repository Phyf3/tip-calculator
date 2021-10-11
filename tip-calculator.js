const billAmount = document.getElementById('billAmount');
const peopleNum = document.getElementById('presentPeople');
const tipButton = document.querySelectorAll('.tipButton');
const custom = document.getElementById('custom');
const clickedButton = document.querySelector('.activeButton');
let tipPerPerson = document.getElementById('tip');
let totalTip = document.getElementById('amount')
let inputedAmount = 0;
let people = 1;
let tipPercentage = 0.05;
const peopleError = document.getElementById('error')
const outline = document.getElementsByClassName('input');
const resetCalcBtn = document.getElementById('reset')



const theResult = (tip, total) => {
    tipPerPerson.textContent = "$" + tip.toFixed(2);
    totalTip.textContent ="$" + total.toFixed(2);
}


const calculateTip = () => {
    let tip = (tipPercentage * inputedAmount) / people
    let total = (inputedAmount / people) + tip;
    theResult(tip, total);
}

//Showing Error Messages 
const errorForPeople = () => {
    peopleError.classList.add('error-message');
    peopleError.classList.add('show');
    peopleNum.classList.add('error-outline')
}
const ignoreErrorForPeople = () => {
    peopleError.remove()
    peopleNum.classList.remove('error-outline')
}


//replaces custom tip with a string when a tip button is clicked intead
const diableCustomTip = () => {
    custom.value = "";
};
//disable the tip buttons when the custom tip is used instead
const disableTipButton = () => {
    tipButton.forEach((button) => {
        button.value = "";
    })
}

//Getting the Bill Amount
billAmount.addEventListener('input', (number) => {
    const {value} = number.target;
    inputedAmount = parseFloat(value);
    console.log(inputedAmount);
})

//Getting the Tip Amount from the Button
tipButton.forEach((button) => {
    button.addEventListener('click', () => {
        diableCustomTip();
        tipPercentage = parseFloat(button.value)
        //calculateTip();
        console.log(tipPercentage);
    })
})


//Getting the Custom Tip Through the Inputed value
custom.addEventListener('input', (number) => {
    const {value} =  number.target //target of the entered value is the number
    if(value !== "") {
        disableTipButton();
        tipPercentage = parseFloat(value) / 100; //the tip is the number i entered of course
        //calculateTip();
    } 
    console.log(tipPercentage);
})
//Getting the Amount of People
peopleNum.addEventListener('input', (number) => {
    const {value} = number.target;
    people = parseFloat(value);
    if (!people || people < 1) {
        errorForPeople();
        return;
    } else {
        ignoreErrorForPeople()
    }

    calculateTip(); 
    console.log(people);
})

const resetCalc = () => {
    tip = 0;
    total = 0;
    theResult(0,0);
    billAmount.value = ""
    peopleNum.value = ""
    errorForPeople();
    ignoreErrorForPeople();
    //alert('ka ching!')
};

resetCalcBtn.addEventListener('click', resetCalc);



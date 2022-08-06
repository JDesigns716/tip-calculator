/*
App: Tip Calculator

The 3 functions 👇
=================
calculateBill()
increasePeople()
decreasePeople()

The Div ID's you need to access 👇
=================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all input / div (will need later)
// bill input, tip input, number of people and per person total
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// calculate the total per person
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100;

  // get total tip amount
  const tipAmount = bill * tipPercent;

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill;

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople;

  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// splits the bill between more people
const increasePeople = () => {
  // increment the amount
  numberOfPeople += 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

// splits the between fewer people
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // can't decrease the number of people to 0 or negative
  if (numberOfPeople <= 1) {
    return;
  }

  // decrement the amount
  numberOfPeople -= 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
};

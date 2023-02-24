const credits = 23580;
const pricePerDroid = 3000;
let message = prompt("Скільки телевізорів ви хочете купити?");
let totalPrice = pricePerDroid * Number(message);

if (message === null) {
  console.log("«Операцію скасовано!»");
} else if (totalPrice <= credits) {
  console.log(
    `«Ви купили ${Number(message)} телевізорів, на рахунку залишилось ${
      credits - totalPrice
    } кредитів.«`
  );
} else console.log("Недостатньо коштів на рахунку!");

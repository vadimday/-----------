const credits = 23580;
const pricePerDroid = 3000;

const numberOfDroids = prompt("Скільки телевізорів ви хочете купити?");

if (numberOfDroids === null) {
  console.log("Операцію скасовано!");
} else {
  const totalPrice = pricePerDroid * Number(numberOfDroids);

  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    const remainingCredits = credits - totalPrice;
    console.log(
      `Ви купили ${numberOfDroids} телевізорів, на рахунку залишилось ${remainingCredits} кредитів.`
    );
  }
}

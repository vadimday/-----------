const total = 100;
let ordered;

function checkOrder(ordered) {
  if (ordered > total) {
    console.log("На складі недостатня кількість товару!");
  } else {
    console.log("Замовлення оформлено");
  }
}

ordered = 20;
checkOrder(ordered);

ordered = 80;
checkOrder(ordered);

ordered = 130;
checkOrder(ordered);

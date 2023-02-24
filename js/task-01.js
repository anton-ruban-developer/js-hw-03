const name = "Генератор";
let price = "1000";
const result = `Обрано «${name}», ціна за одиницю ${price} кредитів.`;
console.log(result);
let newPrice = price.replace("1000", "2000");
const newResult = `Обрано «${name}», ціна за одиницю ${newPrice} кредитів.`;
console.log(newResult);

const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введите Ваш Пароль");

if (message === null) {
  alert("Операцію скасовано!");
} else if (message === ADMIN_PASSWORD) {
  alert("Ласкаво просимо!");
} else alert("Доступ заборонено, невірний пароль!");

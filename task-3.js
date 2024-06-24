const ADMIN_PASSWORD = "12345";
let message;

const userPassword = prompt("Будь ласка, введіть пароль:");

if (userPassword === null) {
  message = "Операцію скасовано!";
} else if (userPassword === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонено, невірний пароль!";
}

alert(message);

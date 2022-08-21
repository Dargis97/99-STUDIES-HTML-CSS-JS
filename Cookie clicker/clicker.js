const cookieDisplay = document.getElementById('cookieDisplay');
let cookieCount = 0;

function increaseCookieCount() {
  cookieCount++;
  setCookie('cookieCount', cookieCount);
}

function setCookie(name, value) {
  document.cookie = `$(name)=$(value)`;
}

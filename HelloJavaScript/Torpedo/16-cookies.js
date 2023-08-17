// Resumen Completo sobre Cookies en Aplicaciones Web

// Crear una cookie
document.cookie = "username=john_doe; expires=Sun, 17 Aug 2023 00:00:00 UTC; path=/";

// Leer todas las cookies
const allCookies = document.cookie;
console.log("Todas las cookies:", allCookies);

// Leer una cookie específica
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

const username = getCookie("username");
console.log("Username:", username);

// Modificar una cookie (actualizando su valor o fecha de expiración)
document.cookie = "username=updated_username; expires=Sun, 17 Aug 2023 00:00:00 UTC; path=/";

// Eliminar una cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// Ejemplo de uso en un formulario
const form = document.getElementById("login-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const usernameInput = form.querySelector("#username");
  const rememberMeCheckbox = form.querySelector("#remember-me");

  const usernameValue = usernameInput.value;
  const rememberMeValue = rememberMeCheckbox.checked;

  if (rememberMeValue) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Expire en una semana
    document.cookie = `username=${usernameValue}; expires=${expirationDate.toUTCString()}; path=/`;
  } else {
    // Si no se selecciona "Recordarme", se puede borrar la cookie existente.
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  }

  // Resto del proceso de inicio de sesión
});

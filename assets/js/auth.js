// Contoh validasi login sederhana
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login berhasil (simulasi)!");
    // Implementasi login nyata via backend API nanti
  });

  // File: assets/js/auth.js

function saveUser(user) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function authenticate(email, password) {
  const users = getUsers();
  return users.find(u => u.email === email && u.password === password);
}

function setLoggedInUser(user) {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");
}

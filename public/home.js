const logout = document.getElementById("logout-btn");

logout.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
});

const user = localStorage.getItem("user");

if (!user) {
  window.location.href = "/login";
}

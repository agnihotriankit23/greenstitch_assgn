const user = localStorage.getItem("user");

if (user) {
  window.location.href = "/";
}

const form = document.querySelector(".login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  console.log(`Email: ${email}\nPassword: ${password}`);

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/"; // redirect to success page
  } else {
    console.log(data);
  }
});

const emailField = document.querySelector("#emailField");
const error = document.querySelector("#error");
const submitBtn = document.querySelector("#submitBtn");
const form = document.getElementById("form");

emailField.addEventListener("input", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue) && emailFieldValue.length) {
    error.classList.remove("hidden", "text-lime-400");
    error.textContent = "Please enter a valid email address";
  } else {
    error.classList.add("hidden");
  }
});
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailFieldValue = document.querySelector("#emailField").value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue)) {
    error.classList.remove("hidden");
    error.classList.add("text-[hsl(0_100%_63%)]");
    error.classList.remove("text-lime-400");
    error.textContent = "Please enter a valid email address";
  } else {
    error.classList.remove("hidden");
    error.textContent = "Submitted!";
    error.classList.add("text-lime-400");
    emailField.value = "";
  }
});

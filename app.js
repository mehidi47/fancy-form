let btn = document.querySelector(".btn");
let input = document.querySelector("input[type=password]");
let img = document.querySelector(".img img");
let form = document.querySelector("form");
let ins = document.querySelector("h3");
let inpValue;
input.addEventListener("mouseout", () => {
  if (inpValue >= 8) {
    login();
  } else {
    error();
  }
});
input.addEventListener("keyup", () => {
  inpValue = input.value.length;
  if (inpValue >= 8) {
    login();
  }
});

function login() {
  input.classList.remove("error");
  btn.classList.remove("angry");
  btn.style.display = "block";
  btn.disabled = false;
  ins.innerHTML = "Perfect! User created successfully.";
  img.src = "logedin.png";
  btn.addEventListener("mouseover", () => {
    btn.style.display = "block";
  });
}
function error() {
  input.classList.add("error");
  btn.classList.add("angry");
  img.src = "error.png";
  ins.innerHTML = "Put at least 8 characters!";
  btn.addEventListener("mouseover", () => {
    btn.style.display = "none";
    setTimeout(() => {
      btn.style.display = "block";
      btn.disabled = false;
    }, 1000);
  });
}

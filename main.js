var PasswordPannel = document.querySelector("#password-panel");

document.querySelector(".visible-icon").addEventListener("click", (e)=>{
  var check = document.querySelector(`.visible-icon img`);
  if (check.src.includes("eye-line.svg")) {
    check.src = "eye-off-line.svg";
    PasswordPannel.type = "text"
  } else {
    check.src = "eye-line.svg";
    PasswordPannel.type = "password"
  }
});

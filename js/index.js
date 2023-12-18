var forgetBtn = document.getElementById("forget-btn");
var forgetModal = document.getElementsByClassName("modal")[0];

forgetBtn.addEventListener("click", () => {
  forgetModal.classList.toggle("open");
})

forgetModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    forgetModal.classList.remove('open')
  }
})
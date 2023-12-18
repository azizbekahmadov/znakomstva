var menuBtn = document.getElementById("menu-btn");
var sidebar = document.getElementById("mobile-nav");

//chat modal 
var chatModal = document.getElementsByClassName("chat-modal")[0];
var chatModalBtns = document.querySelectorAll(".chat-modal-btn");


menuBtn.addEventListener("click", () => { 
  sidebar.classList.toggle('open');
})
 

chatModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    chatModal.classList.toggle("open");
  })
})


chatModal.addEventListener("click", (e) => {
  if(e.target.classList.contains("chat-modal")) {
    chatModal.classList.remove("open");
  }
})
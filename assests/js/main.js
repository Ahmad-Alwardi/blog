var MyButtom = document.querySelector(".btn-secondary");

function show(id){
  MyButtom.innerHTML = id.innerHTML;
}

function opennav(){
   document.querySelector(".navbar-menu").style.left = "0px"; 
   document.querySelector("header").style.filter = "blur(2px)";
   document.querySelector(".all-content").style.filter = "blur(2px)";
   document.querySelector(".slide-number").style.filter = "blur(2px)";
   document.querySelector("footer").style.filter = "blur(2px)";
   document.querySelector(".under-footer").style.filter = "blur(2px)";
}
function closenav(){
  document.querySelector(".navbar-menu").style.left = "-230px"; 
  document.querySelector("header").style.filter = "none";
  document.querySelector(".all-content").style.filter = "none";
  document.querySelector(".slide-number").style.filter = "none";
  document.querySelector("footer").style.filter = "none";
  document.querySelector(".under-footer").style.filter = "none";
}
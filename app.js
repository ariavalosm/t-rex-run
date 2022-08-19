//this for giving movement thru gravitation
document.addEventListener("DOMContentLoaded", () =>{
  const dino = document.querySelector(".dino") //it will jump 150px 

  function control(e) {
    if (e.keyCode === 32){
      console.log("pressed")
    }
  }
  document.addEventListener("keyup", control)
}) //inside this event listener will be a function

if ( position == 150){
  clearInterval(timerId)
  console.log("down")
  let downTimerId = setInterval(function(){
    if (position == 0) {
      clearInterval(downTimerId)
    }
    position -= 30
    dino.style.bottom = position + "px"
  }, 20)
}
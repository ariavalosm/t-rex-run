//this for giving movement thru gravitation
document.addEventListener("DOMContentLoaded", () =>{
  const dino = document.querySelector(".dino") //it will jump 150px 
  let isJumping = false

  function control(e) {
    if (e.keyCode === 32){
      if (!isJumping){
        isJumping = true
        jump()
      }
    }
  }
  document.addEventListener("keyup", control)
//inside this event listener will be a function

function jump(){
  let position = 0
  let timerId = setInterval(function() {
    
    //Dino jumps yay
    if ( position == 150){
      clearInterval(timerId)
      console.log("down")
      let downTimerId = setInterval(function(){
        if (position == 0) {
          clearInterval(downTimerId)
          isJumping = false
        }
        position -= 5
        count--
        position = position * gravity
        dino.style.bottom = position + "px"
      }, 20)
    }

    //move up
    position +=30
    count++
    position = position * gravity
    dino.style.bottom = position + 'px'
  },20)

  }
  
})



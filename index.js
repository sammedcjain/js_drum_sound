for(var i=0;i<document.querySelectorAll(".drum").length;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    var j=this.innerHTML;
    makesound(j);
    anim(j);
    });
}

document.addEventListener("keydown",function () {
  var j=event.key;
  makesound(j);
  anim(j);
});

function makesound(j)
{
  switch(j){

    case 'w':
      var audio= new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case 'a':
      var audio= new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case 's':
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

    case 'd':
          var audio= new Audio("sounds/tom-4.mp3");
          audio.play();
          break;

    case 'j':
          var audio= new Audio("sounds/crash.mp3");
          audio.play();
          break;
    case 'k':
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    case 'l':
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
}
}

function anim(j){
  document.querySelector("."+j).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+j).classList.remove("pressed")},100);
}
document.querySelector(".form-control").addEventListener("keydown",animkey)

function animkey()
{
document.querySelector(".form-control").classList.add("pressed");
setTimeout(function(){document.querySelector(".form-control").classList.remove("pressed")},100);
}

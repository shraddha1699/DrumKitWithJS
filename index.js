var noOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i<noOfButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    var buttonInnerHTML = this.innerHTML;

    keyPressed(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    })    
}
document.addEventListener('keydown', function(event){
    keyPressed(event.key);
    buttonAnimation(event.key);
 });




function keyPressed(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "a":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "k":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "l":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        default:
            console.log(event.key)
            break;
       } 
    
}

function buttonAnimation(keyobtained){
    document.querySelector("."+ keyobtained).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+ keyobtained).classList.remove("pressed");
    },100)
}


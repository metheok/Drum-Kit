

// function to make sound



function makeS(letter){
    var letter=letter.toLowerCase();
    
    switch(letter){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
    
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play(); 
            break;

        case "j":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
    
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "default":
            console.log("not a drum part pressed");

                }
                if (letter=="w"||letter=="a"||letter=="s"||letter=="d"||letter=="j"||letter=="k"||letter=="l"){
                    $("."+letter).addClass("pressed");
                    setTimeout(function(){$("."+letter).removeClass("pressed");},100);}
                      }


// keyboard key press event



$("body").keypress(function(e){makeS(e.key);});



// Click of mouse event

$(".drum").click(function(){  makeS(this.innerHTML);  });



 



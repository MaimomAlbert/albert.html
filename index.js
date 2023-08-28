var numberdrum=document.querySelectorAll(".drum").length;
// detecting button press
for(var i=0; i<numberdrum ; i++)
{
document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);

});
}
// detecting keyboard press eventslistener is added fully to the document
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key){
    switch(key)
    {
        case "w":
            var audio1=new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2=new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3=new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4=new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            var audio5=new Audio("sounds/crash.mp3");
            audio5.play();
            break;
        case "k":
            var audio6=new Audio("sounds/kick-bass.mp3");
            audio6.play();
            break;
        case "l":
            var audio7=new Audio("sounds/snare.mp3");
            audio7.play();
            break;

            default:
        
    }
}
function buttonanimation(currentkey)
{
 var activatingbutt0n=document.querySelector("." + currentkey);
 activatingbutt0n.classList.add("pressed");
 setTimeout(function()
 {
    activatingbutt0n.classList.remove("pressed");
 },100);
}
var timmer = prompt("set timer : ") ;
var score = 0;
var rndm  = 0;

function getNewHit(){ 
   rndm = Math.floor(Math.random()*10)
   document.querySelector("#hitrndm").textContent = rndm ;
}

function makebubble(){
var clutter ="";

for( var i = 1; i <= 133; i++ ){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimmer(){
        var timmerint = setInterval(function () {
            if (timmer > 0){
                timmer--;
                document.querySelector("#timmerval").textContent = timmer ;
            }
            else{
                clearInterval(timmerint);
                document.querySelector("#pbtm").innerHTML = `Game Over`;
            }
        } , 1000);
}
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score ;
}
var scoreinc = document.querySelector("#pbtm")
scoreinc.addEventListener("click", function(dets){
    var clickNum = Number(dets.target.textContent);
    if(clickNum === rndm){
        increaseScore();
        getNewHit();
        makebubble();
    }
})

getNewHit();
runtimmer();
makebubble();
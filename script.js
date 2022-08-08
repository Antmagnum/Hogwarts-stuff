function voice(){
    document.getElementById("btn").style.display="none";
    document.getElementById("mail").style.display="none";
    document.getElementById("hidden").style.display="block";
    const text = document.getElementById("text");
    const msg = "Dearest, Student. </br> </br>We are very pleased to inform you that you have been accepted at Hogwarts, School of Witchcraft and Wizardry.</br></br> Kindly find enclosed a list of all necessary preparatory spells and the Marauder's map.</br></br> The Term begins on 1st of September. </br></br>We await your owl by no later than 25th August. </br> </br>Yours sincerely, </br> Severus Snape";
    let write = 1;
function writing(){
    text.innerHTML = msg.slice(0,write);
    write++;
    if(write > msg.length){
        write = 800;
    }
}

setInterval(writing,55);
const snape = new Audio('snape.mp3');
snape.play();

setTimeout(function(){
  document.getElementById("wandAnimate").style.display="block";
},12000);
setTimeout(function(){
  document.getElementById("mapAnimate").style.display="block";
},13000);
}






// Section for Spell Cards

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("hidden").style.display = "none";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("hidden").style.display = "block";
  }








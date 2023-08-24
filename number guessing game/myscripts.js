let y = Math.floor(Math.random()*10+1);
let guess = 1;

document.getElementById("submitguess").onclick = function (){
    let x= document.getElementById("GuessField").value;
    if (x==y) {
        alert("Congratulations!You Guessed it in "+ guess +" Tries");
        
    } else if(x>y){
        alert("Try a Smaller Number");
        guess++;
    }else{
        alert("Try a Bigger Number");
        guess++;
    }
}
function createDice(){
    const dice = document.createElement("p");
    const dice1 = document.createElement("p");
    const total = document.createElement("p");

    let x= Math.floor(Math.random()*6)+1;
    let y= Math.floor(Math.random()*6)+1;
    let z=x+y;

    dice.textContent="Dice 1: "+ x;
    dice1.textContent="Dice 2: " + y;
    total.textContent = "Total is "+ z;


    document.body.appendChild(dice);
    document.body.appendChild(dice1);
    document.body.appendChild(total);

}



const buttons = document.querySelectorAll('button');

for(const button of buttons){
    button.addEventListener("click",createDice);
}

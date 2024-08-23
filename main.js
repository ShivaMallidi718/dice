function rollDice(){
    
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const value = Math.floor(Math.random()*6)+1;
    let a = new SpeechSynthesisUtterance(value);
    diceResult.textContent = value;
    speechSynthesis.speak(a);
    diceImage.innerHTML = `<img src="images/${value}.png">`;
}

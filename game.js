let balance = 1000;
let count = 1;

function balanceIsZero(balance) {
    if (balance == 0) {
        document.getElementById('bet').disabled = true;
        return true;
    } else {
        return false;
    }
}

function disabledButton() {
    document.getElementById('button').disabled = true;
}

function winLose() {
    const num = Math.floor(Math.random() * 2) + 1;
    if (num === 1) {
        console.log("win");
        return true;
    } else {
        console.log("lose");
        return false;
    }
}

function placeBet(bet) {
    if (winLose()) {
        balance += bet * 2;
    } else {
        balance -= bet;
    }
    document.getElementById('balance').textContent = balance;
    console.log("Runde " + count + " Kontostand: " + balance);
    count++;
    backgroundImage()
}
function backgroundImage() {
    if (balance === 0) {
        console.log("game over");
        disabledButton()
        document.getElementById('gameOverLabel').style.display = 'block';
        document.body.style.backgroundImage = "url('images/homeless.jpeg')";
        document.getElementById('LevelGod').style.display = 'none';
    }
    if (balance < 10000) {
        document.getElementById('Level2').style.display = 'none';
        document.body.style.backgroundColor = '#333';
        document.body.style.backgroundImage = "url('images/worker.jpeg')";
    }
    if (balance >= 10000) {
        document.getElementById('Level2').style.display = 'block';
        document.body.style.backgroundColor = 'gray';
        document.body.style.backgroundImage = "url('images/businessowner.jpeg')";
    }
    if (balance >= 50000) {
        document.getElementById('Level3').style.display = 'block';
        document.getElementById('Level2').style.display = 'none';
        document.getElementById('LevelGod').style.display = 'none';
        document.body.style.backgroundColor = '#228680';
        document.body.style.backgroundImage = "url('images/Invester.jpeg')";
    }
    if (balance >= 1000000) {
        document.getElementById('LevelGod').style.display = 'block';
        document.getElementById('Level3').style.display = 'none';
        document.body.style.backgroundImage = "url('images/gambelgod.png')";
        
    }
}
function getBet() {
     const entryValue = document.getElementById('bet').value;
     const intValue = parseInt(entryValue, 10);
     if (intValue <= balance) {
        placeBet(intValue);
     }
}


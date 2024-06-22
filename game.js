let balance = 99000;
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

    if (balance <= 0) {
        alert("Spiel vorbei");
        console.log("game over");
        disabledButton()
        document.getElementById('gameOverLabel').style.display = 'block';
    }
    if (balance < 10000) {
        document.getElementById('Level2').style.display = 'none';
        document.body.style.backgroundColor = '#333';
    }
    if (balance >= 10000) {
        document.getElementById('Level2').style.display = 'block';
        document.body.style.backgroundColor = 'gray';
    }
    if (balance >= 50000) {
        document.getElementById('Level3').style.display = 'block';
        document.getElementById('Level2').style.display = 'none';
        document.getElementById('LevelGod').style.display = 'none';
        document.body.style.backgroundColor = '#228680';
    }
    if (balance >= 100000) {
        document.getElementById('LevelGod').style.display = 'block';
        document.getElementById('Level3').style.display = 'none';
        document.body.style.backgroundImage = "url('C:\Users\rebek\Programme\Python\Baccarat\images\gambelgod.jpeg')";
    }
}

function getBet() {
     const entryValue = document.getElementById('bet').value;
     const intValue = parseInt(entryValue, 10);
     if (intValue <= balance) {
        placeBet(intValue);
     }
}


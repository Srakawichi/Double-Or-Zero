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
    const num = Math.floor(Math.random() * 3) + 1;
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
}

function getBet() {
     const entryValue = document.getElementById('bet').value;
     const intValue = parseInt(entryValue, 10);
     if (intValue <= balance) {
        placeBet(intValue);
     }
}


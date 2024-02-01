const decreaseBtn =  document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;
let intervalId;

decreaseBtn.onclick = function() {
    if (count == 0) {
        resetBtn.click();
    } else {
        count--;
        countLabel.textContent = count;
    }
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

increaseBtn.onmousedown = function(){
    intervalId = setInterval(function() {
        count++;
        countLabel.textContent = count;
    }, 200)
}

increaseBtn.onmouseup = function() {
    clearInterval(intervalId);
}
increaseBtn.onmouseleave = function() {
    clearInterval(intervalId);
}

decreaseBtn.onmousedown = function() {
    intervalId = setInterval(function() {
        if (count == 0) {
            resetBtn.click();
        } else {
            count--;
            countLabel.textContent = count;
        }
    }, 200);
}

decreaseBtn.onmouseup = function() {
    clearInterval(intervalId);
}

decreaseBtn.onmouseleave = function() {
    clearInterval(intervalId);
}

//declaring variables
let count = 0;
let countNum = document.getElementById("count-num");

//for the add button
function increment() {
    count += 1
    countNum.innerText = count
}
increment(); 

// for the save button
function save(){
    let countStr = count + " - ";
    resultEl = document.getElementById("result");
    resultEl.textContent += countStr;
    countNum.innerText = 0;
    count = 0;
}
save();

let arr = [1,2,3,4,5,6,7,8,9]
let giftAddress = [];
let userStepCount = 0;

let gift1 = false;
let gift2 = false;
let gift3 = false;
let skull1 = false;


for(let i = 0; i < 4; i++){
    // Generate random number
    var randomNumber = Math.floor(Math.random() * 10);

    if (giftAddress[0] == randomNumber || giftAddress[1] == randomNumber || giftAddress[2] == randomNumber) {
        i--;
    }
    else{
        giftAddress[i] = randomNumber;
    }
}

for (let index = 0; index < 4; index++) {
    console.log(giftAddress[index]);
    
}
function inp(){


    let userInp = document.getElementById("userInp").value;
    console.log(userInp);
    check();
}


function check(){
    checkWin();

    let userInp = document.getElementById("userInp").value;
    if (skull1 == false) {
        if (userInp == giftAddress[0]) {
            let creId = 'a' + userInp;
            document.getElementById(creId).innerHTML = "Gift";
            gift1 = true;
        }
        else if (userInp == giftAddress[1]) {
            let creId = 'a' + userInp;
            document.getElementById(creId).innerHTML = "Gift";
            gift2 = true;
        }
        else if (userInp == giftAddress[2]) {
            let creId = 'a' + userInp;
            document.getElementById(creId).innerHTML = "Gift";
            gift3 = true;
        }
        else if (userInp == giftAddress[3]) {
            let creId = 'a' + userInp;
            document.getElementById(creId).innerHTML = "Danger";
            skull1 = true;
        }
        else{
            let creId = 'a' + userInp;
            document.getElementById(creId).innerHTML = "MISS";
        }
        userStepCount = userStepCount + 1;
    }
    else{

        let winBox = document.getElementById("winOrLossBox");
        winBox.style.display = 'block';
        // alert("You won the match");

        document.getElementById("winLoss").innerHTML = "You LOSS";
        document.getElementById("step").innerHTML = "Total step count - " + userStepCount;
    }
    document.getElementById('stepCount').innerHTML = "Step Count = " + userStepCount;
}

function checkWin(){

    if (gift1 == true && gift2 == true && gift3 == true) {
        let winBox = document.getElementById("winOrLossBox");
        winBox.style.display = 'block';
        // alert("You won the match");

        document.getElementById("winLoss").innerHTML = "You WIN";
        document.getElementById("step").innerHTML = "Total step count - " + userStepCount;
    }
}

function relode(){
    location.reload();
}
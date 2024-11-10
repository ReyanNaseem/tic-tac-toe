var allBtn = document.querySelectorAll(".btn");
var newGame = document.getElementById('new-game');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');

var flag = true;
var fill = "";

allBtn.forEach((ele1)=>{
    
    ele1.addEventListener('click',(ele)=>{
        if(flag){
            ele.target.innerHTML = "X";
            ele.target.disabled = true;
            flag = false;
            winner();
        }else{
            ele.target.innerHTML = "O";
            ele.target.disabled = true;
            flag = true;
            winner();
        }
       
    })

})

function winner(){
    if((btn1.innerHTML=='X' && btn2.innerHTML=='X' && btn3.innerHTML=='X') || (btn1.innerHTML=='O' && btn2.innerHTML=='O' && btn3.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn4.innerHTML=='X' && btn5.innerHTML=='X' && btn6.innerHTML=='X') || (btn4.innerHTML=='O' && btn5.innerHTML=='O' && btn6.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn7.innerHTML=='X' && btn8.innerHTML=='X' && btn9.innerHTML=='X') || (btn7.innerHTML=='O' && btn8.innerHTML=='O' && btn9.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn1.innerHTML=='X' && btn4.innerHTML=='X' && btn7.innerHTML=='X') || (btn1.innerHTML=='O' && btn4.innerHTML=='O' && btn7.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn2.innerHTML=='X' && btn5.innerHTML=='X' && btn8.innerHTML=='X') || (btn2.innerHTML=='O' && btn5.innerHTML=='O' && btn8.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn3.innerHTML=='X' && btn6.innerHTML=='X' && btn9.innerHTML=='X') || (btn3.innerHTML=='O' && btn6.innerHTML=='O' && btn9.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn1.innerHTML=='X' && btn5.innerHTML=='X' && btn9.innerHTML=='X') || (btn1.innerHTML=='O' && btn5.innerHTML=='O' && btn9.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else if((btn3.innerHTML=='X' && btn5.innerHTML=='X' && btn7.innerHTML=='X') || (btn3.innerHTML=='O' && btn5.innerHTML=='O' && btn7.innerHTML=='O')){
        console.log("chala");
        newGame.style.display = 'flex';
    }else{
        // console.log("nhi chala");
    }
}

function newChance(){
    newGame.style.display = 'none';
    btn1.innerHTML = '';
    btn1.disabled = false;
    btn2.innerHTML = '';
    btn2.disabled = false;
    btn3.innerHTML = '';
    btn3.disabled = false;
    btn4.innerHTML = '';
    btn4.disabled = false;
    btn5.innerHTML = '';
    btn5.disabled = false;
    btn6.innerHTML = '';
    btn6.disabled = false;
    btn7.innerHTML = '';
    btn7.disabled = false;
    btn8.innerHTML = '';
    btn8.disabled = false;
    btn9.innerHTML = '';
    btn9.disabled = false;
}
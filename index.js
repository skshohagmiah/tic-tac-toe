const boxes = document.querySelectorAll('.box');
const winner = document.querySelector('.winner');

let value = 'x';
let isPlayerTurn = true;

function playerTurn(){
    boxes.forEach(box => {
        box.addEventListener('click', (e) => {
            if(box.innerText === '' && isPlayerTurn){
                box.innerText = value;
                checkWin()
                isPlayerTurn = false;
                computerTurn();
               
            }
        })
    })
    
}
playerTurn()

function computerTurn(){
    setTimeout(() => {
        for(let i = 0; i <= boxes.length -1; i++){
            let random = Math.floor(Math.random() * 9);
                if(boxes[random].innerText === ''){
                    boxes[random].innerText = 'o'
                    checkWin()
                    break;
                }else{
                    continue;
                }
        }
        isPlayerTurn = true;
    },500)
};


function checkWin(){
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(win => {
        if((boxes[win[0]].innerText === boxes[win[1]].innerText) && (boxes[win[1]].innerText === boxes[win[2]].innerText)){
           if(boxes[win[0]].innerText === 'x'){
            winner.textContent = "You Are Winner!"
           }
           if(boxes[win[0]].innerText === 'o'){
            winner.textContent = "Computer Are Winner!"
           }
        }
    })
}
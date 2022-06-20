const cellelements=document.querySelectorAll('.game-board .cell');
const player0=document.querySelector('.players .player1');
const playerx=document.querySelector('.players .player2');
const player1="X";
const player2="O";
let currplayer=player1;
let toggle=false;
let c=0;

var gameover=new Audio('gameover.mp3');
var click=new Audio('click.wav');
var draw=new Audio('draw.wav');
const gif=document.querySelector('.pic');
const result=document.querySelector('.result');
const resulttext=document.querySelector('.result h1');
const btn =document.querySelector('.result button');
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
cellelements.forEach(cell => {

    cell.onclick=()=>{
    
        currplayer = toggle?player1:player2
  addin(cell,currplayer);
  c=c+1;
  cell.classList.add('disabled');
   click.play();
      
        if(wincheck(currplayer))
        {
            console.log( currplayer+ " has won");
            result.classList.remove('inactive');
            gif.classList.remove('inactive');
            resulttext.innerHTML=currplayer+" has won the Game";
            gameover.play();
        }

        else if(c===9&&!wincheck()) 
        {
            result.classList.remove('inactive');
            resulttext.innerHTML="Match Drawn";
           draw.play();
        }
        swapturn(); 

    }

 btn.onclick=()=>{
 location.reload();
}

function wincheck(currplayer)
{
    return win.some(conditions=>{
        return conditions.every(index=>{
 
         return cellelements[index].classList.contains(currplayer);
        })
    })
}
function addin(cell,currplayer)
{
    cell.innerHTML=currplayer;
    cell.classList.add(currplayer);
}
    function swapturn(){ toggle=!toggle;
    
        if(toggle) {playerx.classList.add('active');
        player0.classList.remove('active');
        playerx.classList.remove('dull');
        player0.classList.add('dull');
    }
    else {
        player0.classList.add('active');
        playerx.classList.remove('active');   
        player0.classList.remove('dull');
        playerx.classList.add('dull');
    }
    }
    
});


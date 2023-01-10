function newGame(){
    document.getElementById('playerLP').value = document.getElementById('playerLP').defaultValue;
    document.getElementById('oppLP').value = document.getElementById('oppLP').defaultValue;
}

function newMatch(){
    newGame();
    document.getElementById('playerWins').value = document.getElementById('playerWins').defaultValue;
    document.getElementById('oppWins').value = document.getElementById('oppWins').defaultValue;


}

function increment(param, step){
    document.getElementById(`${param}`).value =  parseInt(document.getElementById(`${param}`).value) + (parseInt(document.getElementById(`${step}`).value) || 0);
}

function decrement(param, step){
    document.getElementById(`${param}`).value =  parseInt(document.getElementById(`${param}`).value) - (parseInt(document.getElementById(`${step}`).value) || 0);
}


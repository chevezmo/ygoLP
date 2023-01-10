function newGame(){
    document.getElementById('playerLP').value = document.getElementById('playerLP').defaultValue;
    document.getElementById('oppLP').value = document.getElementById('oppLP').defaultValue;
    document.getElementById("playerLog").innerHTML = "";
    document.getElementById("oppLog").innerHTML = "";
}

function newMatch(){
    newGame();
    document.getElementById('playerWins').value = document.getElementById('playerWins').defaultValue;
    document.getElementById('oppWins').value = document.getElementById('oppWins').defaultValue;


}

function increment(param){
    let LP = parseInt(document.getElementById(`${param}`).value);
    let gain = parseInt(document.getElementById('stepSize').value) || 0;
    document.getElementById(`${param}`).value = LP + gain;
    log(param, LP, document.getElementById(`${param}`).value);
}

function decrement(param){
    let LP = parseInt(document.getElementById(`${param}`).value);
    let loss = parseInt(document.getElementById('stepSize').value) || 0;
    document.getElementById(`${param}`).value = LP - loss;
    log(param, LP, document.getElementById(`${param}`).value);
}

function log(param, previous, damage){
    if(param == "playerLP"){
        document.getElementById("playerLog").innerHTML = document.getElementById("playerLog").innerHTML + "<br />" + previous + " -> " + damage;
    } else {
        document.getElementById("oppLog").innerHTML = document.getElementById("oppLog").innerHTML + "<br />" + previous + " -> " + damage;
    }
}
function newGame(){
    document.getElementById('playerLP').value = document.getElementById('playerLP').defaultValue;
    document.getElementById('oppLP').value = document.getElementById('oppLP').defaultValue;
    document.getElementById("playerLog").innerHTML = "8000";
    document.getElementById("oppLog").innerHTML = "8000";
}

function newMatch(){
    newGame();
    document.getElementById('playerWins').value = document.getElementById('playerWins').defaultValue;
    document.getElementById('oppWins').value = document.getElementById('oppWins').defaultValue;
}

function increment(player){
    document.getElementById(`${player}`).stepUp();
}

function buttonChange(){
    switch(document.getElementById('buttonLPchange').innerHTML){
        case '⚔️':
            document.getElementById('buttonLPchange').innerHTML = '❤️';
            break;
        case '❤️':
            document.getElementById('buttonLPchange').innerHTML = '⚔️';
            break;
    }
}

function showNotes(){
    switch(document.getElementById('notes').style.display){
        case 'block':
            document.getElementById('notes').style.display = 'none';
            break;
        default:
            document.getElementById('notes').style.display = 'block';
    }
}

function LPchange(player, log){
    let LP = parseInt(document.getElementById(`${player}`).value);
    let change = parseInt(document.getElementById('stepSize').value) || 0;
    switch(document.getElementById('buttonLPchange').innerHTML){
        case '❤️':
            document.getElementById(`${player}`).value = LP + change;
            document.getElementById(`${log}`).innerHTML = document.getElementById(`${log}`).innerHTML + "<br />" + change + " ❤️ "+ (LP + change);
            break;
        case '⚔️':
            document.getElementById(`${player}`).value = LP - change;
            document.getElementById(`${log}`).innerHTML = document.getElementById(`${log}`).innerHTML + "<br />" + change + " ⚔️ "+ (LP - change) ;
            break;
        default:
            document.getElementById(`${player}`).value;
    }
}
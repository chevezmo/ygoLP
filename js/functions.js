function reset(){
    document.getElementById('playerLP').value = document.getElementById('playerLP').defaultValue;
    document.getElementById('oppLP').value = document.getElementById('oppLP').defaultValue;
}

function increment(param, step){
    document.getElementById(`${param}`).value =  parseInt(document.getElementById(`${param}`).value) + parseInt(document.getElementById(`${step}`).value);
}

function decrement(param, step){
    document.getElementById(`${param}`).value =  parseInt(document.getElementById(`${param}`).value) - parseInt(document.getElementById(`${step}`).value);
}


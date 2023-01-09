function reset(){
    document.getElementById('playerLP').value = document.getElementById('playerLP').defaultValue;
    document.getElementById('oppLP').value = document.getElementById('oppLP').defaultValue;
}

function increment(param){
    document.getElementById(`${param}`).stepUp();
}

function decrement(param){
    document.getElementById(`${param}`).stepDown();
}

function newStep(param1, param2, size){
    document.getElementById(`${param1}`).step = size;
    document.getElementById(`${param2}`).step = size;
}
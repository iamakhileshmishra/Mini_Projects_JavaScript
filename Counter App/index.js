var counter = 0;
function increment(){
    counter += 1;
    document.getElementById('counter').innerHTML = counter;
}
function decrement(){
    counter -= 1;
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}

function setScreen(value){
    document.getElementById('screen').innerHTML = value;
}
function getScreen(){
    return document.getElementById('screen').innerHTML;
}
function add(key) { 
    var result = getScreen();
    if (result!='0' || isNaN(key)) setScreen(result + key);
    else setScreen(key);
}

function calc(){
    let result = eval(getScreen());
    setScreen(result)
}
function reiniciar(){
    location.reload();
}

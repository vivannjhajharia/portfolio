function play(song){
    var audio1 = document.getElementById(song);
    audio1.play();
}

function stop(song){
    var audio1 = document.getElementById(song);
    audio1.pause();
    audio1.currentTime=0;
}
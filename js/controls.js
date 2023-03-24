export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
}) {

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonSet.classList.add('hide')
    }

    function pause(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    function getMinutes(){
    let newMinutes = prompt('quantos minutos?')
    if(!newMinutes){
        return false
    }
    return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}

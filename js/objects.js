export const objects = { 
    //Objetos
    play : {
    'color': 'black',
    'visible': true,
    },
    pause : {
    'color': 'black',
    'visible': false,
    },
    stop : {
    'color': 'black',
    'visible': false,
    },
    set : {
    'color': 'black',
    'visible': true,
    },
    addition : {
    'color': 'black',
    'visible': true,
    },
    subtraction : {
    'color': 'black',
    'visible': true,
    },
    dark_mode : {
    'color': 'white',
    },
    select:{
        'rain' : false,
        'coffeShop' : false,
        'forest' : false,
        'fireplace' : false,
    },

    //Alteração de status dos objetos ao clicar no Button Play
    buttonStatePlayToPause (){
        objects.play.visible=false;
        objects.pause.visible=true;
        objects.stop.visible=true;
        objects.set.visible=false;
    },
    buttonStatePauseToPlay(){
        objects.play.visible=true;
        objects.pause.visible=false;
    },
    buttonStateStopToSet(){
        objects.play.visible=true;
        objects.pause.visible=false;
        objects.stop.visible= false;
        objects.set.visible=true;
    },
    screenModeWhiteToBlack(){
        objects.play.color="white";
        objects.pause.color="white";
        objects.stop.color="white";
        objects.set.color="white";
        objects.addition.color="white";
        objects.subtraction.color="white";
        objects.dark_mode="black";
    },
    screenModeBlackToWhite(){
        objects.play.color="black";
        objects.pause.color="black";
        objects.stop.color="black";
        objects.set.color="black";
        objects.addition.color="black";
        objects.subtraction.color="black";
        objects.dark_mode="white";
    }
}
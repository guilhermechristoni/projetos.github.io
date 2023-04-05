import { elements } from "./elements.js";
import { objects } from "./objects.js";
import { sons } from "./sounds.js";

export const controlButtons = {
    //Alterando as imagens da pagina, escondendo o Play/SET e exibindo o Pause/Stop
    play(){
        if(objects.dark_mode.color=="white"){
            elements.buttonPlay.classList.add('hide')
            elements.buttonPause.classList.remove('hide')
            elements.buttonSet.classList.add('hide')
            elements.buttonStop.classList.remove('hide')
        }
        else {
            elements.buttonPlay_white.classList.add('hide')
            elements.buttonPause_white.classList.remove('hide')
            elements.buttonSet_white.classList.add('hide')
            elements.buttonStop_white.classList.remove('hide')
        }
    },
    //Alterando as imagens da pagina, escondendo o Pause e exibindo o Play
    pause(){
        if(objects.dark_mode.color=="white"){
            elements.buttonPlay.classList.remove('hide')
            elements.buttonPause.classList.add('hide')
        }
        else {
            elements.buttonPlay_white.classList.remove('hide')
            elements.buttonPause_white.classList.add('hide')
        }
    },
    //Alterando as imagens da pagina, escondendo o Stop e exibindo o Play/Set
    stop(){
        if(objects.dark_mode.color=="white"){
            elements.buttonPlay.classList.remove('hide')
            elements.buttonPause.classList.add('hide')
            elements.buttonSet.classList.remove('hide')
            elements.buttonStop.classList.add('hide')
        }
        else {
            elements.buttonPlay_white.classList.remove('hide')
            elements.buttonPause_white.classList.add('hide')
            elements.buttonSet_white.classList.remove('hide')
            elements.buttonStop_white.classList.add('hide')
        }
    },
    addition(){
            elements.minutesDisplay.textContent = Number(elements.minutesDisplay.textContent) + 5
            elements.minutesDisplay.textContent = String(elements.minutesDisplay.textContent).padStart(2, "0")
    },
    subtraction(){
        elements.minutesDisplay.textContent = Number(elements.minutesDisplay.textContent) - 5
        elements.minutesDisplay.textContent = String(elements.minutesDisplay.textContent).padStart(2, "0")
    },
    rain(){
        if(objects.select.rain==true){
            elements.buttonRain.classList.toggle('hide')
            elements.buttonRain_Select.classList.toggle('hide')
            elements.buttonForest.classList.remove('hide')
            elements.buttonForest_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.remove('hide')
            elements.buttonCoffeShop_Select.classList.add('hide')
            elements.buttonFireplace.classList.remove('hide')
            elements.buttonFireplace_Select.classList.add('hide')
            sons.bgAudioRain.play()
            sons.bgAudioForest.pause()
            sons.bgAudioCoffeShop.pause()
            sons.bgAudioFireplace.pause()
            sons.controlVolumeRain.classList.add('white')
            sons.controlVolumeForest.classList.remove('white')
            sons.controlVolumeCoffeShop.classList.remove('white')
            sons.controlVolumeFireplace.classList.remove('white')
        }
        else {
            elements.buttonRain.classList.toggle('hide')
            elements.buttonRain_Select.classList.toggle('hide')
            elements.buttonForest.classList.remove('hide')
            elements.buttonForest_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.remove('hide')
            elements.buttonCoffeShop_Select.classList.add('hide')
            elements.buttonFireplace.classList.remove('hide')
            elements.buttonFireplace_Select.classList.add('hide')
            sons.bgAudioRain.pause()
            sons.controlVolumeRain.classList.remove('white')
        }
    },
    forest(){
        if(objects.select.forest==true){
            elements.buttonForest.classList.toggle('hide')
            elements.buttonForest_Select.classList.toggle('hide')
            elements.buttonRain.classList.remove('hide')
            elements.buttonRain_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.remove('hide')
            elements.buttonCoffeShop_Select.classList.add('hide')
            elements.buttonFireplace.classList.remove('hide')
            elements.buttonFireplace_Select.classList.add('hide')
            sons.bgAudioRain.pause()
            sons.bgAudioForest.play()
            sons.bgAudioCoffeShop.pause()
            sons.bgAudioFireplace.pause()
            sons.controlVolumeRain.classList.remove('white')
            sons.controlVolumeForest.classList.add('white')
            sons.controlVolumeCoffeShop.classList.remove('white')
            sons.controlVolumeFireplace.classList.remove('white')
        }
        else {
            elements.buttonForest.classList.toggle('hide')
            elements.buttonForest_Select.classList.toggle('hide')
            elements.buttonRain.classList.remove('hide')
            elements.buttonRain_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.remove('hide')
            elements.buttonCoffeShop_Select.classList.add('hide')
            elements.buttonFireplace.classList.remove('hide')
            elements.buttonFireplace_Select.classList.add('hide')
            sons.bgAudioForest.pause()
            document.body.style.backgroundImage= "url('')";
            sons.controlVolumeForest.classList.remove('white')
        }
    },
    coffeShop(){
        if(objects.select.coffeShop==true){
            elements.buttonForest.classList.remove('hide')
            elements.buttonForest_Select.classList.add('hide')
            elements.buttonRain.classList.remove('hide')
            elements.buttonRain_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.toggle('hide')
            elements.buttonCoffeShop_Select.classList.toggle('hide')
            elements.buttonFireplace.classList.remove('hide')
            elements.buttonFireplace_Select.classList.add('hide')
            sons.bgAudioCoffeShop.play()
            sons.bgAudioRain.pause()
            sons.bgAudioForest.pause()
            sons.bgAudioFireplace.pause()
            sons.controlVolumeRain.classList.remove('white')
            sons.controlVolumeForest.classList.remove('white')
            sons.controlVolumeCoffeShop.classList.add('white')
            sons.controlVolumeFireplace.classList.remove('white')
        }
        else {
            elements.buttonForest.classList.remove('hide')
            elements.buttonForest_Select.classList.add('hide')
            elements.buttonRain.classList.remove('hide')
            elements.buttonRain_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.toggle('hide')
            elements.buttonCoffeShop_Select.classList.toggle('hide')
            elements.buttonFireplace.classList.remove('hide')
            elements.buttonFireplace_Select.classList.add('hide')
            sons.bgAudioCoffeShop.pause()
            sons.controlVolumeCoffeShop.classList.remove('white')
        }
    },
    fireplace(){
        if(objects.select.fireplace==true){
            elements.buttonForest.classList.remove('hide')
            elements.buttonForest_Select.classList.add('hide')
            elements.buttonRain.classList.remove('hide')
            elements.buttonRain_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.remove('hide')
            elements.buttonCoffeShop_Select.classList.add('hide')
            elements.buttonFireplace.classList.toggle('hide')
            elements.buttonFireplace_Select.classList.toggle('hide')
            sons.bgAudioRain.pause()
            sons.bgAudioForest.pause()
            sons.bgAudioCoffeShop.pause()
            sons.bgAudioFireplace.play()
            sons.controlVolumeRain.classList.remove('white')
            sons.controlVolumeForest.classList.remove('white')
            sons.controlVolumeCoffeShop.classList.remove('white')
            sons.controlVolumeFireplace.classList.add('white')
        }
        else {
            elements.buttonForest.classList.remove('hide')
            elements.buttonForest_Select.classList.add('hide')
            elements.buttonRain.classList.remove('hide')
            elements.buttonRain_Select.classList.add('hide')
            elements.buttonCoffeShop.classList.remove('hide')
            elements.buttonCoffeShop_Select.classList.add('hide')
            elements.buttonFireplace.classList.toggle('hide')
            elements.buttonFireplace_Select.classList.toggle('hide')
            sons.bgAudioFireplace.pause()
            sons.controlVolumeFireplace.classList.remove('white')
        }
    },
    screenModeBlackToWhite(){
        sons.buttonPressAudio.play()
        elements.screenModeBlackToWhite.classList.toggle('hide')
        elements.screenModeWhiteToBlack.classList.toggle('hide')
        elements.main.style.backgroundColor = "white";
        objects.dark_mode.color="white";
        document.body.style.color="#323238";
        if(objects.pause.visible == true && objects.stop.visible == true){
            elements.buttonPause_white.classList.add('hide')
            elements.buttonPause.classList.remove('hide')
            elements.buttonStop.classList.remove('hide')
            elements.buttonStop_white.classList.add('hide')
            elements.buttonAddition.classList.remove('hide')
            elements.buttonAddition_white.classList.add('hide')
            elements.buttonSubtraction.classList.remove('hide')
            elements.buttonSubtraction_white.classList.add('hide')
        }
        else if(objects.pause.visible == false && objects.stop.visible == true){
            elements.buttonPlay.classList.remove('hide')
            elements.buttonPlay_white.classList.add('hide')
            elements.buttonAddition.classList.remove('hide')
            elements.buttonAddition_white.classList.add('hide')
            elements.buttonSubtraction.classList.remove('hide')
            elements.buttonSubtraction_white.classList.add('hide')
            elements.buttonStop.classList.remove('hide')
            elements.buttonStop_white.classList.add('hide')
        }
        else {
            elements.buttonPlay.classList.remove('hide')
            elements.buttonPlay_white.classList.add('hide')
            elements.buttonSet.classList.remove('hide')
            elements.buttonSet_white.classList.add('hide')
            elements.buttonAddition.classList.remove('hide')
            elements.buttonAddition_white.classList.add('hide')
            elements.buttonSubtraction.classList.remove('hide')
            elements.buttonSubtraction_white.classList.add('hide')
        }
    },
    screenModeWhiteToBlack(){
        sons.buttonPressAudio.play()
        elements.screenModeBlackToWhite.classList.toggle('hide')
        elements.screenModeWhiteToBlack.classList.toggle('hide')
        elements.main.style.backgroundColor = "black";
        objects.dark_mode.color="black";
        console.log(objects.dark_mode.color)
        document.body.style.color="white";
        console.log(objects.stop.visible)
        if(objects.pause.visible == true && objects.stop.visible == true)
            {
            elements.buttonPause_white.classList.remove('hide')
            elements.buttonPause.classList.add('hide')
            elements.buttonStop.classList.add('hide')
            elements.buttonStop_white.classList.remove('hide')
            elements. buttonAddition.classList.add('hide')
            elements.buttonAddition_white.classList.remove('hide')
            elements.buttonSubtraction.classList.add('hide')
            elements.buttonSubtraction_white.classList.remove('hide')
            }
        else if(objects.pause.visible == false && objects.stop.visible == true)
            {
            elements.buttonPlay.classList.add('hide')
            elements.buttonPlay_white.classList.remove('hide')
            elements.buttonSet.classList.add('hide')
            elements.buttonSet_white.classList.add('hide')
            elements.buttonAddition.classList.add('hide')
            elements.buttonAddition_white.classList.remove('hide')
            elements.buttonSubtraction.classList.add('hide')
            elements.buttonSubtraction_white.classList.remove('hide')
            elements.buttonStop.classList.add('hide')
            elements.buttonStop_white.classList.remove('hide')
            }
        else 
            {
            elements.buttonPlay.classList.add('hide')
            elements. buttonPlay_white.classList.remove('hide')
            elements.buttonSet.classList.add('hide')
            elements.buttonSet_white.classList.remove('hide')
            elements.buttonAddition.classList.add('hide')
            elements.buttonAddition_white.classList.remove('hide')
            elements.buttonSubtraction.classList.add('hide')
            elements.buttonSubtraction_white.classList.remove('hide')
            }
        }
}
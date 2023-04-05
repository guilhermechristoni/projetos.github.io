import { elements } from "./elements.js"
import { sons } from "./sounds.js"
import { objects } from "./objects.js"
import { controlButtons } from "./controlButton.js"
import { projectTimer } from "./projectTimer.js"
import { controlVolume } from "./controlVolume.js"


//Botãos de adição e subtração somando ou diminuindo 5 minutos ao TIMER
elements.buttonAddition.addEventListener('click', function(){
  controlButtons.addition()
})

elements.buttonAddition_white.addEventListener('click', function(){
  controlButtons.addition()
})

elements.buttonSubtraction.addEventListener('click', function(){
  controlButtons.subtraction()
})

elements.buttonSubtraction_white.addEventListener('click', function(){
  controlButtons.subtraction()
})

//Botãos de iniciar e pausar o Timer
elements.buttonPlay.addEventListener('click', function() {
  controlButtons.play()
  projectTimer.countdown()
  sons.buttonPressAudio.play()
  objects.buttonStatePlayToPause()
})

elements.buttonPlay_white.addEventListener('click', function() {
  controlButtons.play()
  projectTimer.countdown()
  sons.buttonPressAudio.play()
  objects.buttonStatePlayToPause()
})
  
elements.buttonPause.addEventListener('click', function() {
  controlButtons.pause()
  sons.buttonPressAudio.play()
  projectTimer.hold()
  objects.buttonStatePauseToPlay()
})

elements.buttonPause_white.addEventListener('click', function() {
  controlButtons.pause()
  projectTimer.hold()
  objects.buttonStatePauseToPlay()
})

//Botão STOP, reseta o Timer ao valor inicial da pagina 
elements.buttonStop.addEventListener('click', function() {
  controlButtons.stop()
  projectTimer.resetControls()
  projectTimer.resetTimer()
  elements.colorTime.classList.remove('time')
  sons.buttonPressAudio.play()
  objects.buttonStateStopToSet()
})

elements.buttonStop_white.addEventListener('click', function() {
  controlButtons.stop()
  projectTimer.resetControls_white()
  projectTimer.resetTimer()
  elements.colorTime.classList.remove('time')
  sons.buttonPressAudio.play()
  objects.buttonStateStopToSet()
})

//Botão SET, utilizado para setar o tempo em minutos do cronometro
elements.buttonSet.addEventListener('click', function() {
  sons.buttonPressAudio.play()
  objects.button
    let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    projectTimer.resetTimer()
    return
  }

  projectTimer.minutes = newMinutes
  projectTimer.updateTimerDisplay(projectTimer.minutes, 0)
})

elements.buttonSet_white.addEventListener('click', function() {
    sons.buttonPressAudio.play()
    let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    resetTimer()
    return
  }

  projectTimer.minutes = newMinutes
  projectTimer.updateTimerDisplay(projectTimer.minutes, 0)
})


//Colocando audio de fundo em loop
sons.bgAudioRain.loop = true
sons.bgAudioCoffeShop.loop = true
sons.bgAudioFireplace.loop = true
sons.bgAudioForest.loop = true

//Botão eventos AUDIOS DE FUNDO (forest,rain,fireplace,coffeShop)
elements.buttonRain.addEventListener('click', function(){
  objects.select.rain=true;
  controlButtons.rain()
})

elements.buttonRain_Select.addEventListener('click', function(){
  objects.select.rain=false;
  controlButtons.rain()
})

elements.buttonForest.addEventListener('click', function(){
  objects.select.forest=true;
  controlButtons.forest()

})

elements.buttonForest_Select.addEventListener('click', function(){
  objects.select.forest=false;
  controlButtons.forest()
})

elements.buttonCoffeShop.addEventListener('click', function(){
  objects.select.coffeShop=true;
  controlButtons.coffeShop()
})

elements.buttonCoffeShop_Select.addEventListener('click', function(){
  objects.select.coffeShop=false;
  controlButtons.coffeShop()
})

elements.buttonFireplace.addEventListener('click', function(){
  objects.select.fireplace=true;
  controlButtons.fireplace()
})

elements.buttonFireplace_Select.addEventListener('click', function(){
  objects.select.fireplace=false;
  controlButtons.fireplace()
})

//Inputes de volumes do audio de fundo do tema (forest,rain,fireplace,coffeShop)
sons.controlVolCoffe.addEventListener("input", function(){
  controlVolume.volCoffe()
})

sons.controlVolCloud.addEventListener("input", function(){
  controlVolume.volCloud()
})

sons.controlVolFire.addEventListener("input", function(){
  controlVolume.volFire()
})

sons.controlVolTree.addEventListener("input", function(){
  controlVolume.volTree()
})

//DarkMode = Botão para alterar fundo de pagina para Preto ou Branco 
elements.screenModeBlackToWhite.addEventListener("click", function(){
  controlButtons.screenModeBlackToWhite()
})

elements.screenModeWhiteToBlack.addEventListener("click", function(){
  controlButtons.screenModeWhiteToBlack()
})





import { elements } from "./elements.js"
import { objects } from "./objects.js"
import { sons } from "./sounds.js"



let minutes = Number(elements.minutesDisplay.textContent)
let timerTimeOut

export const projectTimer = {
    updateTimerDisplay(minutes, seconds) {
        elements.minutesDisplay.textContent = String(minutes).padStart(2, "0")
        elements.secondsDisplay.textContent = String(seconds).padStart(2, "0")
    },
    countdown(){
        timerTimeOut = setTimeout(function() {
          let seconds =  Number(elements.secondsDisplay.textContent)
          let minutes = Number(elements.minutesDisplay.textContent)
          let isFinished = minutes <= 0 && seconds <= 0
      
          projectTimer.updateTimerDisplay(minutes, 0)
      
          if (isFinished) {
            if(objects.dark_mode.color=="white"){
              projectTimer.resetControls()
              sons.kitchenTimer.play()
              return
            }
            else{
              projectTimer.resetControls_white()
              sons.kitchenTimer.play()
              return
            }
          }
      
          if( seconds <= 0 ) {
            seconds = 60
      
            --minutes
          }
      
          projectTimer.updateTimerDisplay(minutes, String(seconds - 1))
          
          
      
          projectTimer.countdown()
        }, 1000)
      },

    resetTimer() {
      projectTimer.updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    },

    resetControls() {
        elements.buttonPlay.classList.remove('hide')
        elements.buttonPause.classList.add('hide')
        elements.buttonSet.classList.remove('hide')
        elements.buttonStop.classList.add('hide')
        objects.pause.visible=false;
        objects.play.visible=true;
        },
      
    resetControls_white() {
        elements.buttonPlay_white.classList.remove('hide')
        elements.buttonPause_white.classList.add('hide')
        elements.buttonSet_white.classList.remove('hide')
        elements.buttonStop_white.classList.add('hide')
        objects.pause.visible=false;
        objects.play.visible=true;
    },
    hold(){
      clearTimeout(timerTimeOut)
    }
}
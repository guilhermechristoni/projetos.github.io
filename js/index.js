//Elementos BOTÃO DE TEMAS
const buttonRain = document.querySelector('.rain')
const buttonRain_Select= document.querySelector('.rain_select')
const buttonForest = document.querySelector('.forest')
const buttonForest_Select = document.querySelector('.forest_select')
const buttonCoffeShop= document.querySelector('.coffe-shop')
const buttonCoffeShop_Select= document.querySelector('.coffe-shop_select')
const buttonFireplace= document.querySelector('.fireplace')
const buttonFireplace_Select= document.querySelector('.fireplace_select')

//Elementos BOTÃO DO TIME
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonStop_Select = document.querySelector('.stop_select')
const buttonSet = document.querySelector('.set')
const buttonAddition = document.querySelector('.addition')
const buttonAddition_Select = document.querySelector('.addition_select')
const buttonSubtraction = document.querySelector('.subtraction')
const buttonSubtraction_Select = document.querySelector('.subtraction_select')
const minutesDisplay = document.querySelector('.minutes')
const colorTime = document.querySelector('.color')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
const secondsDisplay = document.querySelector('.seconds')

//Elementos SOUNDS
const bgAudioRain = new Audio("./sounds/chuva.wav")
const bgAudioForest = new Audio("./sounds/floresta.wav")
const bgAudioCoffeShop = new Audio("./sounds/cafeteria.wav")
const bgAudioFireplace = new Audio("./sounds/lareira.wav")

//timer
function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

buttonAddition.addEventListener('click', function(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")

})

buttonAddition_Select.addEventListener('click', function(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")

})

buttonSubtraction.addEventListener('click', function(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
})

buttonSubtraction_Select.addEventListener('click', function(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
})

function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
  
      updateTimerDisplay(minutes, 0)
  
      if (isFinished) {
    
        resetControls()
  
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
  
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
      
      
  
      countdown()
    }, 1000)
  }
  
  buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop_Select.classList.remove('hide')
    buttonStop.classList.add('hide')
    colorTime.classList.add('time')
    buttonAddition_Select.classList.remove('hide')
    buttonAddition.classList.add('hide')
    buttonSubtraction_Select.classList.remove('hide')
    buttonSubtraction.classList.add('hide')

    document.getElementById('teste').style.background="#02799D";

    countdown()
  
  })
  
  buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonStop_Select.classList.add('hide')
    buttonStop.classList.remove('hide')
    colorTime.classList.remove('time')
    buttonAddition_Select.classList.add('hide')
    buttonAddition.classList.remove('hide')
    buttonSubtraction_Select.classList.add('hide')
    buttonSubtraction.classList.remove('hide')
    clearTimeout(timerTimeOut)
    document.getElementById('teste').style.background="#E1E1E6";
    
  })
  
  buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
    colorTime.classList.remove('time')
  })

  buttonStop_Select.addEventListener('click', function() {
    resetControls()
    resetTimer()
    colorTime.classList.remove('time')
    buttonStop_Select.classList.add('hide')
    buttonAddition_Select.classList.add('hide')
    buttonAddition.classList.remove('hide')
    buttonSubtraction_Select.classList.add('hide')
    buttonSubtraction.classList.remove('hide')
    document.getElementById('teste').style.background="#E1E1E6";
  })
  
  buttonSet.addEventListener('click', function() {
    let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
  })

bgAudioRain.loop
bgAudioCoffeShop.loop
bgAudioFireplace.loop
bgAudioForest.loop



//EVENTO = Botão eventos MUSICAS DE FUNDO (Controls)
buttonRain.addEventListener('click', function(){
    buttonRain.classList.toggle('hide')
    buttonRain_Select.classList.toggle('hide')
    buttonForest.classList.remove('hide')
    buttonForest_Select.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShop_Select.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace_Select.classList.add('hide')
    bgAudioRain.play()
    bgAudioForest.pause()
    bgAudioCoffeShop.pause()
    bgAudioFireplace.pause()
    document.body.style.backgroundImage= "url('./gif/chuva.gif')";

})
buttonRain_Select.addEventListener('click', function(){
    buttonRain.classList.toggle('hide')
    buttonRain_Select.classList.toggle('hide')
    buttonForest.classList.remove('hide')
    buttonForest_Select.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShop_Select.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace_Select.classList.add('hide')
    bgAudioRain.pause()
    document.body.style.backgroundImage= "url('')";
})
buttonForest.addEventListener('click', function(){
    buttonForest.classList.toggle('hide')
    buttonForest_Select.classList.toggle('hide')
    buttonRain.classList.remove('hide')
    buttonRain_Select.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShop_Select.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace_Select.classList.add('hide')
    bgAudioRain.pause()
    bgAudioForest.play()
    bgAudioCoffeShop.pause()
    bgAudioFireplace.pause()
    document.body.style.backgroundImage= "url('./gif/forest.gif')";
})
buttonForest_Select.addEventListener('click', function(){
    buttonForest.classList.toggle('hide')
    buttonForest_Select.classList.toggle('hide')
    buttonRain.classList.remove('hide')
    buttonRain_Select.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShop_Select.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace_Select.classList.add('hide')
    bgAudioForest.pause()
    document.body.style.backgroundImage= "url('')";
})
buttonCoffeShop.addEventListener('click', function(){
    buttonForest.classList.remove('hide')
    buttonForest_Select.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonRain_Select.classList.add('hide')
    buttonCoffeShop.classList.toggle('hide')
    buttonCoffeShop_Select.classList.toggle('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace_Select.classList.add('hide')
    bgAudioCoffeShop.play()
    bgAudioRain.pause()
    bgAudioForest.pause()
    bgAudioFireplace.pause()
    document.body.style.backgroundImage= "url('./gif/coffeshop.gif')";
})
buttonCoffeShop_Select.addEventListener('click', function(){
    buttonForest.classList.remove('hide')
    buttonForest_Select.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonRain_Select.classList.add('hide')
    buttonCoffeShop.classList.toggle('hide')
    buttonCoffeShop_Select.classList.toggle('hide')
    buttonFireplace.classList.remove('hide')
    buttonFireplace_Select.classList.add('hide')
    bgAudioCoffeShop.pause()
    document.body.style.backgroundImage= "url('')";
})
buttonFireplace.addEventListener('click', function(){
    buttonForest.classList.remove('hide')
    buttonForest_Select.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonRain_Select.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShop_Select.classList.add('hide')
    buttonFireplace.classList.toggle('hide')
    buttonFireplace_Select.classList.toggle('hide')
    bgAudioRain.pause()
    bgAudioForest.pause()
    bgAudioCoffeShop.pause()
    bgAudioFireplace.play()
    document.body.style.backgroundImage= "url('./gif/fireplace.gif')";
})
buttonFireplace_Select.addEventListener('click', function(){
    buttonForest.classList.remove('hide')
    buttonForest_Select.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonRain_Select.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonCoffeShop_Select.classList.add('hide')
    buttonFireplace.classList.toggle('hide')
    buttonFireplace_Select.classList.toggle('hide')
    bgAudioFireplace.pause()
    document.body.style.backgroundImage= "url('')";
})

//EVENTO = Botão de play,pause,stop,above e below do TIMER



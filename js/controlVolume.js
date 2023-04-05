import { sons } from "./sounds.js"

let inputValueVolTree
let inputValueVolCloud
let inputValueVolCoffe
let inputValueVolFire

export const controlVolume = {
    volCoffe(){
        inputValueVolCoffe= sons.controlVolCoffe.value
        sons.bgAudioCoffeShop.volume = inputValueVolCoffe
    },
    volCloud(){
        inputValueVolCloud= sons.controlVolCloud.value
        sons.bgAudioRain.volume = inputValueVolCloud
    },
    volFire(){
        inputValueVolFire= sons.controlVolFire.value
        sons.bgAudioFireplace.volume = inputValueVolFire
    },
    volTree(){
        inputValueVolTree= sons.controlVolTree.value
        sons.bgAudioForest.volume = inputValueVolTree
    },



}
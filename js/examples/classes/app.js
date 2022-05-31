import { toHTML } from "./utils.js"
import { SW } from "../switch-translate.js"

export class App {
    constructor () {
        this.$el = document.body
        this.lang, this.size, this.numbers
        this.exeptionForTranstate = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '?', '!', ' ', '@', '"']
        
        localStorage.getItem('lang') ? this.lang = localStorage.getItem('lang') : this.lang = 'en'
        localStorage.getItem('size') ? this.size = localStorage.getItem('size') : this.size ='small'
        localStorage.getItem('numbers') ? this.numbers = localStorage.getItem('numbers') : this.numbers = 'true'
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', toHTML())
        this.signKeys()
        this.paintLaguageBTN()
        window.addEventListener('load', this.takeFromLS())
    }

    signKeys () {
        let clavaWrittingKey = document.querySelectorAll(`[data-write]`)
        clavaWrittingKey.forEach(e => {
            let atrib = e.getAttribute('data-write')
            return e.innerHTML = `${SW[this.lang][this.size][atrib]}`
        })
    }

    paintLaguageBTN () {
        let greyLang
        this.lang === 'ru' ? greyLang = 'en' : greyLang = 'ru'
        document.querySelector(`.key-bord__el-${greyLang}`).classList.add('paint')
    }
    takeFromLS (){
        localStorage.setItem('shiftStatus', 'false')
        localStorage.setItem('typeFirstRowOfKeybord', 'numbers')
        localStorage.setItem('capsLockStatus', 'false')
        localStorage.setItem('letterSize', 'small')
    }
}
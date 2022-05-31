import { _deleteCursor, _addCursor, _addWrittenStrToHTML, defineWrittenStrLength, pressOnKey, showPressedKey, changeKeyboard, _ifBrBeforeDeleteBr, _ifBrBeforeTab, btnSound, _addWrittenStrToHTMLWithBR, addAnimation } from "./utils.js"


export class keyboardFunctions {
    constructor() {
        this.lang, this.shiftStatus, this.$writtenStr, this.$writtenStrLength
        this.capsLockStatus = false
        this.isEnterPressed = false
        this.exeptionForTranstate = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        this.$writtenStrLength = defineWrittenStrLength(this.$writtenStrLength)
        this.stepFor$writtenStrLength = defineWrittenStrLength(this.$writtenStrLength)

        localStorage.getItem('writtenStr') ? this.$writtenStr = localStorage.getItem('writtenStr') : this.$writtenStr = ''    
        this.btnVoices = ['write', 'Shift', 'CapsLock', 'Backspace', 'Enter', 'ArrowLeft', 'ArrowRight', 'Tab', 'sound']
    }


    changeClavaKeys(event) {
        let pressedBTN = event.target.dataset.voice

        if (pressedBTN === 'translate') {
            changeKeyboard(this.capsLockStatus, event)
            this.lang = localStorage.getItem('lang')
            this.lang === 'en' ? this.lang = 'ru' : this.lang = 'en'
            document.querySelector('.paint').classList.remove('paint')
            document.querySelector(`.key-bord__el-${this.lang}`).classList.add('paint')
        }
        if (pressedBTN === 'Shift') {
            localStorage.setItem('shiftStatus', true)
            localStorage.setItem('typeFirstRowOfKeybord', 'simbols')
            changeKeyboard(this.capsLockStatus)
        }
        if (pressedBTN === 'CapsLock') {
            localStorage.setItem('capsLockStatus', !this.capsLockStatus)
            this.capsLockStatus = !this.capsLockStatus
            localStorage.getItem('capsLockStatus') == 'true' ? localStorage.setItem('letterSize', 'big') : localStorage.setItem('letterSize', 'small')
            changeKeyboard(this.capsLockStatus)
        }
    }

    writeStr(event) {
        const write = event.target.dataset.write
        const voice = event.target.dataset.voice
        let soundBtnON = document.querySelector('.sound')
        if (this.btnVoices.includes(voice) && soundBtnON.classList.contains('active') || voice == 'sound') {
            btnSound(voice)
        }
        if (write) {
            let actualSimbol = pressOnKey(event)
            
            this.$writtenStr = _deleteCursor(this.$writtenStr)
            this.$writtenStr += actualSimbol + '|'
            this.$writtenStr = _addWrittenStrToHTML(this.$writtenStr)
        }

        // сломала голову, как сделать анимацию...
        // addAnimation (event.target)
        // let circle = document.querySelector('.animation')
        //                 setTimeout(() => {
        //                     circle.classList.toggle('small-animation-circle')
        //                     circle.classList.toggle('big-animation-circle')
        //                 }, 10)
        //                 setTimeout(() => {
        //                     event.target.firstElementChild.remove()
        //                 }, 1200)
        // console.log(this.$writtenStr)

    }

    cursorCleaner(event) {
        const write = event.target.dataset.write
        if (write) {
            this.$writtenStr = _deleteCursor(this.$writtenStr)
        }
    }

    ligthClava(event) {
        let lightBTN = event.target.dataset.light
        if (lightBTN) {
            document.querySelector(`.${lightBTN}`).classList.toggle('active')
        }
    }

    pressOnFisicalKey (event) {
        showPressedKey(event)
    }

    pressOnEnter(event) {
        const voiceBTN = event.target.dataset.voice
        if (voiceBTN == 'Enter') {
            if (this.isEnterPressed) {
                this.$writtenStr = _deleteCursor(this.$writtenStr)
            }
            this.$writtenStr += '<br>' + '|'
            this.isEnterPressed = true
            _addWrittenStrToHTML(this.$writtenStr)
        }
    }

    pressOnBackspace(event) {
        const voiceBTN = event.target.dataset.voice
        if (voiceBTN == 'Backspace') {
            if (this.$writtenStr.slice(-5, -1) == '<br>') {
                this.$writtenStr = _ifBrBeforeDeleteBr(this.$writtenStr)
            } 
            else if (this.$writtenStr.slice(-7, -1) == '&nbsp;' || this.$writtenStr.slice(-8, -2) == '&nbsp;'){
                this.$writtenStr = _ifBrBeforeTab(this.$writtenStr)
            } else {
                this.$writtenStr = _deleteCursor(this.$writtenStr)
                this.$writtenStr = this.$writtenStr.slice(0, -1) + '|'
                    if (this.$writtenStr.slice(-4, -1) == '<br') {
                        this.$writtenStr = this.$writtenStr.slice(0, -4) + '|'
                    }
                this.$writtenStr = _addWrittenStrToHTML(this.$writtenStr)
            }
        }
    }

    pressOnTab (event) {
        event.preventDefault()
        const voiceBTN = event.target.dataset.voice
        if (voiceBTN == 'Tab') {
            this.$writtenStr = _deleteCursor(this.$writtenStr)
            this.$writtenStr = this.$writtenStr + '&nbsp;&nbsp;&nbsp;&nbsp;' + '|'
            this.$writtenStr = _addWrittenStrToHTML(this.$writtenStr)
        }
    }

    cursorFlicker(event) {
        if (!event) {
            setInterval(() => {
                this.$writtenStr = _deleteCursor(this.$writtenStr)
                this.$writtenStr = _addWrittenStrToHTMLWithBR(this.$writtenStr)
            }, 500, this.$writtenStr)

            setInterval(() => {
                this.$writtenStr += '|'
                this.$writtenStr = _addWrittenStrToHTML(this.$writtenStr)
            }, 1000, this.$writtenStr)
        }
    }

    hideClava (event) {
        const clavaBTN = event.target.dataset.clava
        const clavaIcon = document.querySelector('._icon-keyboard')
        const clavaBlock = document.querySelector('.key-bord__clava')
        if (clavaBTN) {
            clavaBlock.classList.toggle('hidden')
            clavaBlock.classList.toggle('comeback')
            clavaIcon.classList.toggle('inactive')
        }
    }


    // pressKeyAnimation (event) {
    //     // let key = event.target.dataset.voice
    //     // // ломает печатание...
    //     // if (key) {
    //     //     console.log(key)
    //         let keyDataWrite = event.target.dataset.write
    //         document.querySelectorAll(`[data-write]`)
    //             .forEach(e => {
    //                 if(e.getAttribute('data-write') == keyDataWrite) {
    //                     // e.classList.add('Hi')
    //                     addAnimation(e)
    //                     console.log(e)
    //                     let circle = document.querySelector('.animation')
    //                     setTimeout(() => {
    //                         circle.classList.toggle('small-animation-circle')
    //                         circle.classList.toggle('big-animation-circle')
    //                     }, 9550)
    //                     setTimeout(() => {
    //                         e.firstElementChild.remove()

    //                     }, 9500)
    //                 }
    //             })
                


    //             console.log(this.$writtenStr);
    //     // }
    // }




    // animatePressedKey(event) {
    //     let isWrittenKey = event.target.dataset.write
    //     let searchAtrib

    //     isWrittenKey ? searchAtrib = event.target.dataset.write : searchAtrib = event.target.dataset.voice


    // }
}



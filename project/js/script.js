import { App } from "./examples/classes/app.js";
import { keyboardFunctions } from "./examples/classes/keybordFunction.js" 


new App().init()
const keyboard = new keyboardFunctions();

document.addEventListener('load', keyboard.cursorFlicker())

document.addEventListener('click', event => {
    keyboard.changeClavaKeys(event)
    keyboard.writeStr(event)
    keyboard.cursorCleaner(event)
    keyboard.ligthClava(event)
    keyboard.pressOnEnter(event)
    keyboard.pressOnBackspace(event)
    keyboard.pressOnTab(event)
    keyboard.cursorFlicker(event)
    keyboard.hideClava(event)
    // keyboard.pressKeyAnimation(event)
    // keyboard.animatePressedKey(event)
})

document.addEventListener('keydown', event => {
    keyboard.pressOnFisicalKey(event)
    keyboard.writeStr(event)
})

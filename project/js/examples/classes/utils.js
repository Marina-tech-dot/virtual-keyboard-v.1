import { SW } from "../switch-translate.js"

export function toHTML(){
    return `
        <div class="wrapper">
            <main class="key-bord">
                <div class="key-bord__body">
                    <div class="key-bord__monic monic">
                        <div class="monic__inner-screen">
                            <div class="monic__screen">
                                <p class="key-bord__text" id="written"></p>
                            </div>
                        </div>
                            <div class="monic__panel">
                                <div class="monic__item">
                                    <p class="_icon-info"></p>
                                    <p class="_icon-keyboard" data-clava = true></p>
                                </div>
                            </div>
                    </div>
                    <div class="key-bord__clava comeback">
                        <div class="key-bord__row">
                            <div class="key-bord__row-el el-standart">
                                <p class="_icon-voice"></p>
                                <div class="circle voice"></div>
                            </div>
                            <div class="key-bord__row-el el-standart" data-sound="sound" data-light="sound" data-voice="sound">
                                <p class="_icon-sound" data-sound="sound" data-light="sound" data-voice="sound"></p>
                                <div class="circle sound" data-sound="sound" data-light="sound" data-voice="sound"></div>
                            </div>
                            <div class="key-bord__row-el el-standart" data-write="1" data-voice="write">1</div>
                            <div class="key-bord__row-el el-standart" data-write="2" data-voice="write">2</div>
                            <div class="key-bord__row-el el-standart" data-write="3" data-voice="write">3</div>
                            <div class="key-bord__row-el el-standart" data-write="4" data-voice="write">4</div>
                            <div class="key-bord__row-el el-standart" data-write="5" data-voice="write">5</div>
                            <div class="key-bord__row-el el-standart" data-write="6" data-voice="write">6</div>
                            <div class="key-bord__row-el el-standart" data-write="7" data-voice="write">7</div>
                            <div class="key-bord__row-el el-standart" data-write="8" data-voice="write">8</div>
                            <div class="key-bord__row-el el-standart" data-write="9" data-voice="write">9</div>
                            <div class="key-bord__row-el el-standart" data-write="0" data-voice="write">0</div>
                            <div class="key-bord__row-el el-shift-backsp _icon-delete" data-voice="Backspace"></div>
                        </div>
                        <div class="key-bord__row">
                            <div class="key-bord__row-el el-shift-backsp _icon-tab" data-voice="Tab"></div>
                            <div class="key-bord__row-el el-standart" data-write="q" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="w" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="e" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="r" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="t" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="y" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="u" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="i" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="o" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="p" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="[" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="]" data-voice="write"></div>
                        </div>
                        <div class="key-bord__row">
                            <div class="key-bord__row-el el-caps _icon-caps" data-capslock="true" data-voice="CapsLock" data-light="capsLock" data-caps="true">
                                <div class="circle capsLock" data-light="capsLock" data-caps="true"></div>
                            </div>
                            <div class="key-bord__row-el el-standart" data-write="a" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="s" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="d" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="f" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="g" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="h" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="j" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="k" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="l" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write=";" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write='"' data-voice="write"></div>
                            <div class="key-bord__row-el el-enter _icon-enter" data-voice="Enter"></div>
                        </div>
                        <div class="key-bord__row">
                            <div class="key-bord__row-el el-shift-backsp _icon-shift" data-voice="Shift" data-shift="true"></div>
                            <div class="key-bord__row-el el-standart" data-write="z" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="x" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="c" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="v" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="b" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="n" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="m" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="," data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="." data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="?" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="!" data-voice="write"></div>
                            <div class="key-bord__row-el el-standart" data-write="@" data-voice="write"></div>
                        </div>
                        <div class="key-bord__row">
                            <div class="key-bord__row-el en-ru" data-translate = "true" data-voice="translate">
                                <p class="key-bord__el-en" data-translate = "true" data-voice="translate">en</p>
                                <p class="key-bord__el-slash" data-translate = "true" data-voice="translate">/</p>
                                <p class="key-bord__el-ru" data-translate = "true" data-voice="translate">ru</p>
                            </div>
                            <div class="key-bord__row-el el-space" data-write=" " data-voice="write"></div>
                            <div class="key-bord__row-el el-standart _icon-left-arrow" data-arrow="left" data-voice="ArrowLeft"></div>
                            <div class="key-bord__row-el el-standart _icon-right-arrow" data-arrow="right" data-voice="ArrowRight"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `
}



// так было
// export function toHTML() {
//     return `
//         <div class="wrapper">
//             <main class="key-bord">
//                 <div class="key-bord__body">
//                     <div class="key-bord__monic monic">
//                         <div class="monic__inner-screen">
//                             <div class="monic__screen">
//                                 <p class="key-bord__text" id="written"></p>
//                             </div>
//                         </div>
//                             <div class="monic__panel">
//                                 <div class="monic__item">
//                                     <p class="_icon-info"></p>
//                                     <p class="_icon-keyboard" data-clava = true></p>
//                                 </div>
//                             </div>
//                     </div>
//                     <div class="key-bord__clava comeback">
//                         <div class="key-bord__row">
//                             <div class="key-bord__row-el el-standart">
//                                 <p class="_icon-voice"></p>
//                                 <div class="circle voice"></div>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-sound="sound" data-light="sound" data-voice="sound">
//                                 <p class="_icon-sound" data-sound="sound" data-light="sound" data-voice="sound"></p>
//                                 <div class="circle sound" data-sound="sound" data-light="sound" data-voice="sound"></div>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="1" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="1" data-voice="write">1</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="2" data-voice="write">
//                                 <p class="key-bord__el-text " data-write="2" data-voice="write">2</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="3" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="3" data-voice="write">3</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="4" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="4" data-voice="write">4</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="5" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="5" data-voice="write">5</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="6" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="6" data-voice="write">6</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="7" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="7" data-voice="write">7</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="8" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="8" data-voice="write">8</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="9" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="9" data-voice="write">9</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="0" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="0" data-voice="write">0</p>
//                             </div>
//                             <div class="key-bord__row-el el-shift-backsp" data-voice="Backspace">
//                                 <p class="_icon-delete" data-voice="backspace"></p>
//                             </div>
//                         </div>
//                         <div class="key-bord__row">
//                             <div class="key-bord__row-el el-shift-backsp" data-voice="Tab">
//                                 <p class="_icon-tab" data-voice="Tab"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="q" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="q" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="w" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="w" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="e" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="e" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="r" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="r" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="t" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="t" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="y" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="y" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="u" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="u" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="i" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="i" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="o" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="o" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="p" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="p" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="[" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="[" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="]" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="]" data-voice="write"></p>
//                             </div>
//                         </div>
//                         <div class="key-bord__row">
//                             <div class="key-bord__row-el el-caps" data-capslock="true" data-voice="CapsLock" data-light="capsLock" data-caps="true">
//                                 <p class="_icon-caps" data-capslock="true" data-voice="CapsLock" data-light="capsLock"  data-caps="true"></p>
//                                 <div class="circle capsLock" data-light="capsLock" data-caps="true"></div>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="a" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="a" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="s" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="s" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="d" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="d" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="f" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="f" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="g" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="g" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="h" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="h" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="j" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="j" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="k" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="k" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="l" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="l" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write=";" data-voice="write">
//                                 <p class="key-bord__el-text" data-write=";" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write='"' data-voice="write">
//                                 <p class="key-bord__el-text" data-write='"' data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-enter" data-voice="Enter">
//                                 <p class="_icon-enter" data-voice="Enter"></p>
//                             </div>
//                         </div>
//                         <div class="key-bord__row">
//                             <div class="key-bord__row-el el-shift-backsp" data-voice="Shift" data-shift="true">
//                                 <p class="_icon-shift" data-voice="Shift" data-shift="true"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="z" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="z" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="x" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="x" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="c" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="c" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="v" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="v" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="b" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="b" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="n" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="n" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="m" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="m" data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="," data-voice="write">
//                                 <p class="key-bord__el-text" data-write="," data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="." data-voice="write">
//                                 <p class="key-bord__el-text" data-write="." data-voice="write"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="?" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="?" data-voice="write">?</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="!" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="!" data-voice="write">!</p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-write="@" data-voice="write">
//                                 <p class="key-bord__el-text" data-write="@" data-voice="write">@</p>
//                             </div>
//                             <div class="key-bord__empty-el empty2"></div>
//                         </div>
//                         <div class="key-bord__row">
//                             <div class="key-bord__row-el en-ru" data-translate = "true" data-voice="translate">
//                                 <p class="key-bord__el-en" data-translate = "true" data-voice="translate">en</p>
//                                 <p class="key-bord__el-slash" data-translate = "true" data-voice="translate">/</p>
//                                 <p class="key-bord__el-ru" data-translate = "true" data-voice="translate">ru</p>
//                             </div>
//                             <div class="key-bord__row-el el-space" data-write=" " data-voice="write"></div>
//                             <div class="key-bord__row-el el-standart" data-voice="ArrowLeft">
//                                 <p class="_icon-left-arrow" data-arrow="left" data-voice="ArrowLeft"></p>
//                             </div>
//                             <div class="key-bord__row-el el-standart" data-voice="ArrowRight">
//                                 <p class="_icon-right-arrow" data-arrow="right" data-voice="ArrowRight"></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     `
// }



export function changeKeyboard (capsLockStatus, event='') {
    const exeptionForTranstate = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    let lang = localStorage.getItem('lang')
    if (lang == null) {
        localStorage.setItem('lang', 'en')
        }

    let shiftStatus = localStorage.getItem('shiftStatus')
    if (shiftStatus == null) {
        localStorage.setItem('shiftStatus', 'false')
    }

    let type = localStorage.getItem('typeFirstRowOfKeybord')
    if (type == null) {
        localStorage.setItem('typeFirstRowOfKeybord', 'numbers')
    }

    let size = localStorage.getItem('letterSize')
    if (size == null) {
        localStorage.setItem('letterSize', 'small')
        size = localStorage.getItem('letterSize')
    } 


    if (capsLockStatus == 'true' || capsLockStatus == true) {
        lang == null ? lang = localStorage.getItem('lang') : false
        for (let key of Object.keys(SW)) {
            if (key === lang) {
                takeLettersKey(lang, size, exeptionForTranstate)
            }
        }
    }


    if ((shiftStatus == null || shiftStatus == 'false')) {
        localStorage.setItem('typeFirstRowOfKeybord', 'numbers')
        type = localStorage.getItem('typeFirstRowOfKeybord')
        if (event != '' && event.target.dataset.voice == 'translate'){
            lang === 'ru' ? lang = 'en' : lang = 'ru'
            localStorage.setItem('lang', lang)
        }
        for (let key of Object.keys(SW)) {
            if (key === lang) {
                takeLettersKey(lang, size, exeptionForTranstate)
            } else if (key === type) {
                takeNumbersKey(type, exeptionForTranstate)
            }
        }
        return
    } 


    if (shiftStatus == 'true' && capsLockStatus == false) {
        lang == null ? lang = localStorage.getItem('lang') : false
            for (let key of Object.keys(SW)) {
                if (key === lang) {
                    takeLettersKey(lang, 'big', exeptionForTranstate)
                } else if (key === type) {
                    takeNumbersKey(type, exeptionForTranstate)
                }
            }
    }

    if (shiftStatus == 'true' && capsLockStatus == true) {
        for (let key of Object.keys(SW)) {
            if (key === lang) {
                takeLettersKey(lang, 'small', exeptionForTranstate)
            } else if (key === type) {
                takeNumbersKey(type, exeptionForTranstate)
            }
        }
    }
}

function takeLettersKey(lang, size, exeptionForTranstate) {
    document.querySelectorAll(`[data-write]`)
        .forEach(e => {
            let atrib = e.getAttribute('data-write')
            if (!exeptionForTranstate.includes(atrib)) {
                return e.innerHTML = `${SW[lang][size][atrib]}`
            }
        })
}

function takeNumbersKey(type, exeptionForTranstate) {
    document.querySelectorAll(`[data-write]`)
        .forEach(e => {
            let atrib = e.getAttribute('data-write')
            if (exeptionForTranstate.includes(atrib)) {
                return e.innerHTML = `${SW[type][atrib]}`
            }
        })
}

export function pressOnKey(event) {
    let clickedKey = event.target.dataset.write
    let answer
    document.querySelectorAll(`[data-write]`)
        .forEach(e => {
            let atrib = e.getAttribute('data-write')
            if(atrib == clickedKey) {
                answer = e.textContent
            }
        })

        if(localStorage.getItem('shiftStatus') == 'true'){
            localStorage.setItem('shiftStatus', 'false')
            changeKeyboard()
        }

        return answer
}

export function _addWrittenStrToHTML($writtenStr) {
    document.getElementById('written').innerHTML = `<p class='break'>${$writtenStr}</p>`
    return $writtenStr
}

export function _addWrittenStrToHTMLWithBR($writtenStr) {
    document.getElementById('written').innerHTML = `<p class='break'>${$writtenStr}</p>`
    return $writtenStr
}

export function _deleteCursor($writtenStr) {
    $writtenStr.split('').includes('|') ? $writtenStr = $writtenStr.split('').filter(item => item != '|').join('') : false
    // из-за мигающего курсора для решения проблемы с таб
    if ($writtenStr.slice(-5, -1) == '&nbs'){
        $writtenStr = $writtenStr.slice(0, -23)
    }
    return $writtenStr
}

export function _addCursor($writtenStr) {
    $writtenStr += '|'
    _addWrittenStrToHTML($writtenStr)
}

export function defineWrittenStrLength($writtenStrLength) {
    window.innerWidth >= 921 ? $writtenStrLength = 95 :
        window.innerWidth < 921 && window.innerWidth >= 721 ? $writtenStrLength = 75 :
            window.innerWidth < 721 ? $writtenStrLength = 48 : false
    
    return $writtenStrLength
}

export function showPressedKey (event) {
    pressedKeyLighter('data-write', event)
    pressedKeyLighter('data-voice', event)
}

function pressedKeyLighter (atribute, event) {
    document.querySelectorAll(`[${atribute}]`)
        .forEach(e => {
            let atrib
            atribute == 'data-write' ? atrib = e.textContent : atrib = e.getAttribute(`${atribute}`)

            if (atrib == event.key) {
                e.click()

                e.classList.add('key-shown')

                setTimeout(() => {
                    e.classList.remove('key-shown')
                }, 200);
            }
        })
}

export function _ifBrBeforeDeleteBr($writtenStr) {
        $writtenStr = $writtenStr.slice(0, -5) + '|'
        return $writtenStr = _addWrittenStrToHTML($writtenStr)
}

export function _ifBrBeforeTab($writtenStr) {
    // через костыль ... мигающий курсор
    if ($writtenStr.slice(-3, -1) != ';' || $writtenStr.slice(-2, -1) != ';') {
        console.log('tt')
        console.log($writtenStr)
        // _deleteCursor($writtenStr)
        $writtenStr = $writtenStr.slice(0, -2) + '|'
    } else {
        $writtenStr = $writtenStr.slice(0, -25) + '|'

        if ($writtenStr.slice(-2, -1) == '&' ) {
                $writtenStr = $writtenStr.slice(0, -2) + '&nbsp;&nbsp;&nbsp;&nbsp;' + '|'
            }
    }
    console.log($writtenStr)
    return $writtenStr = _addWrittenStrToHTML($writtenStr)
//ЗАДОЛБАЛАСЬ!

    //работало с удалением курсора
    // $writtenStr = $writtenStr.slice(0, -25) + '|'
    
    // if ($writtenStr.slice(-2, -1) == '&' ) {
    //         $writtenStr = $writtenStr.slice(0, -2) + '&nbsp;&nbsp;&nbsp;&nbsp;' + '|'
    //     }
    // return $writtenStr = _addWrittenStrToHTML($writtenStr)
}

//странности с путями
export function btnSound(voice) {
    let voices = {
        CapsLock : 'capsLock',
        ArrowLeft: 'arrow',
        ArrowRight: 'arrow',
    }
    for (let [key, value] of Object.entries(voices)) {
        console.log(key)
        console.log(voice)
        if(voice == key) {
            console.log(voice)
            voice = value
        }
    }
    console.log(voice)

    let audio = document.createElement('audio');
    audio.src = `./assets/audio/${voice}.mp3`
    audio.play()
    audio.volume = 0.4;
}

//странности с путями
export function addAnimation (e) {
    let animationCircle = `
    <img class="small-animation-circle animation" src="./assets/foto/animation.svg">
    `
    return e.insertAdjacentHTML('afterbegin', animationCircle)
}


// главный модуль
import { JsBlock } from "./js-block"
import { TimerBlock } from "./timer-block";
import {JS_CREATION_DATE} from "../core/constans/settings";

export class App {
  #jsBlock
  #timerBLock

  constructor() {
    this.#jsBlock = new JsBlock()
    this.#timerBLock = new TimerBlock(JS_CREATION_DATE)
  }

  run () {
    const jsBlockHTML = this.#jsBlock.render()
    const timerBLockHTML = this.#timerBLock.render()
    document.body.append(jsBlockHTML, timerBLockHTML)
  }
}

// export { App }
import { KeyEvents } from "./Modules/KeyEvents/KeyEvents"
import { Renderer } from "./renderer"

console.log("loaded index.ts")

window.onload = () => {
  Renderer.init()
  Renderer.doms().consoleBar.innerText = "RR"
  window.addEventListener("keydown", KeyEvents.onKeyDown)
}

import { Reflection } from "../../Effects/Reflection"
import { Renderer } from "../../renderer"

const onKeyDown = (e: KeyboardEvent) => {
  const line1 = "qwertyuiop"
  const line2 = "asdfghjkl"
  const line3 = "zxcvbnm"
  const pos = { x: -1, y: -1 }

  let buffer = line1.indexOf(e.key)
  if (buffer !== -1) {
    pos.x = buffer
    pos.y = 0
  }
  buffer = line2.indexOf(e.key)
  if (buffer !== -1) {
    pos.x = buffer
    pos.y = 1
  }
  buffer = line3.indexOf(e.key)
  if (buffer !== -1) {
    pos.x = buffer
    pos.y = 2
  }
  Renderer.doms().consoleBar.innerText = `Key: ${e.key}, Position: (${pos.x}, ${pos.y})`
  if (pos.x !== -1) {
    Reflection(pos)
  }
}
export const KeyEvents = {
  onKeyDown,
}

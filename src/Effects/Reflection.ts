import { ClientInfo } from "../Tools/ClientInfo"
import { Renderer } from "../renderer"

export const Reflection = (pos: { x: number; y: number }) => {
  const effect = document.createElement("div")
  effect.className = "reflection"
  effect.style.left = `${Math.min(
    ClientInfo.resolusion.x / 20 +
      pos.x * (ClientInfo.resolusion.x / 10) +
      (Math.random() * 50 - 25),
    ClientInfo.resolusion.x - 150
  )}px`
  effect.style.top = `${Math.min(
    ClientInfo.resolusion.y / 20 +
      pos.y * (ClientInfo.resolusion.y / 3) +
      (Math.random() * 90 - 45),
    ClientInfo.resolusion.y - 150
  )}px`

  Renderer.doms().main.appendChild(effect)
  setTimeout(() => {
    Renderer.doms().main.removeChild(effect)
  }, 1000)
}

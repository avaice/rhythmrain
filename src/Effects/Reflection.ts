import { Renderer } from "../renderer"

export const Reflection = (pos: { x: number; y: number }) => {
  const effect = document.createElement("div")
  effect.className = "reflection"
  effect.style.left = `${100 + pos.x * 100 + (Math.random() * 50 - 25)}px`
  effect.style.top = `${100 + pos.y * 200 + (Math.random() * 50 - 25)}px`

  Renderer.doms().main.appendChild(effect)
  setTimeout(() => {
    Renderer.doms().main.removeChild(effect)
  }, 1000)
}

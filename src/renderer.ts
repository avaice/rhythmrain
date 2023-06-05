let consoleBar_var: HTMLElement | null = null
let main_var: HTMLElement | null = null

const init = () => {
  try {
    consoleBar_var = document.getElementById("consoleBar")
    main_var = document.getElementById("main")
  } catch {
    throw new Error("An Error occured while init Renderer! Failed to get DOMs.")
  }
}
const doms = () => {
  if (!consoleBar_var || !main_var) {
    throw new Error("Renderer was called before init!")
  }
  return {
    consoleBar: consoleBar_var,
    main: main_var,
  }
}

export const Renderer = {
  init,
  doms,
}

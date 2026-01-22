const handleWindowResize = () => {
  if (!document || !window) {
    return
  }

  const htmlElement = document.documentElement
  const viewportHeight = window.innerHeight

  htmlElement.style.setProperty('--vh', `${viewportHeight * 0.01}px`)
}

export const vhFix = () => {
  handleWindowResize()
  window.addEventListener('resize', handleWindowResize)
}

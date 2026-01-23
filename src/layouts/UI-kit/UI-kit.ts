// Treat file as ES module to avoid global scope conflicts
export {}

const getAnchorId = (index: number): string => `section-${index}`

const sections = [...document.querySelectorAll<HTMLElement>('[data-ui-section]')]
const nav = document.querySelector<HTMLElement>('[data-ui-nav]')
const toggle = document.querySelector<HTMLButtonElement>('[data-ui-nav-toggle]')

const createAnchorsId = (): void => {
  sections.forEach((section, index) => {
    section.id = getAnchorId(index)
  })
}

const getItemTemplate = (item: HTMLElement, index: number): string => {
  const title = item.querySelector('[data-ui-title]')
  return `
    <li>
      <a href='#${getAnchorId(index)}'>${title?.innerHTML || ''}</a>
    </li>
  `
}

const createList = (list: HTMLElement): void => {
  sections.forEach((section, index) => {
    list.insertAdjacentHTML('beforeend', getItemTemplate(section, index))
  })
}

const closeNav = (): void => {
  if (!nav || !toggle) return
  nav.classList.remove('is-open')
  toggle.innerHTML = '+'
}

const openNav = (): void => {
  if (!nav || !toggle) return
  nav.classList.add('is-open')
  toggle.innerHTML = '-'
}

const initPageNavigation = (): void => {
  if (!sections.length || !nav || !toggle) return

  const list = nav.querySelector('ul')
  if (!list) return

  createList(list)
  createAnchorsId()

  toggle.addEventListener('click', (e) => {
    e.stopPropagation()
    if (nav.classList.contains('is-open')) {
      closeNav()
    } else {
      openNav()
    }
  })

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!nav.contains(target)) {
      closeNav()
    }
  })
}

initPageNavigation()

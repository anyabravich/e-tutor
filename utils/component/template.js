import camelcase from 'camelcase'
import uppercamelcase from 'uppercamelcase'

export const astroTemplate = (componentName) => ({
  content: `---
interface Props {
  className?: string
}

const { className } = Astro.props
---

<div class:list={['${camelcase(componentName)}', className]}></div>
`,
  filename: `${uppercamelcase(componentName)}.astro`
})

export const scssTemplate = (componentName) => ({
  content: `
@use "@styles/shared" as *;

.${camelcase(componentName)} {}
`,
  filename: `${uppercamelcase(componentName)}.scss`
})

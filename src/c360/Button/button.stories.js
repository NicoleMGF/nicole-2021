import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Button',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const BaseButton = () => {
  return fragmentFrom.html`
    <c360-button>Base Button</c360-button>
  `
}

export const BrandButton = () => {
  return fragmentFrom.html`
    <c360-button variant="brand">Brand Button</c360-button>
  `
}

export const DestructiveButton = () => {
  return fragmentFrom.html`
    <c360-button variant="destructive">Destructive Button</c360-button>
  `
}

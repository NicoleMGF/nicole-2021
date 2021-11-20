import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'
import docs from './docs.mdx'

export default {
  title: 'SDS Components/Button',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const BaseButton = () => {
  return fragmentFrom.html`
    <sds-button variant="base">Base Button</sds-button>
  `
}

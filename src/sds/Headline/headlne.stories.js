import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'
import docs from './docs.mdx'

export default {
  title: 'SDS Components/Headline',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const BaseHeadline = () => {
  return fragmentFrom.html`
    <sds-headline level="h1">This is a base h1 headline</sds-headline>
  `
}

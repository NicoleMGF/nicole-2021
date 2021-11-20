import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Headline',
  parameters: {
    docs: {
      page: docs
    }
  }
}

export const XLargeHeadline = () => {
  return fragmentFrom.html`
    <c360-headline level="h1" size="x-large">
      This is an x-large H1 headline.
    </c360-headline>
  `
}

export const LargeHeadline = () => {
  return fragmentFrom.html`
    <c360-headline level="h1" size="large">
      This is a large H1 headline.
    </c360-headline>
  `
}

export const MediumHeadline = () => {
  return fragmentFrom.html`
    <c360-headline level="h1" size="medium">
      This is a medium H1 headline.
    </c360-headline>
  `
}

export const SmallHeadline = () => {
  return fragmentFrom.html`
    <c360-headline level="h1" size="small">
      This is a small H1 headline.
    </c360-headline>
  `
}

import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Card',
  parameters: {
    docs: {
      page: docs
    },
    actions: {
      handles: ['ctaclick']
    }
  }
}

export const Base = () => {
  return fragmentFrom.html`
    <c360-card
      id="card"
      image="/demo/giraffe.jpg"
      title="Contact us"
      content="Call us at 1-800-667-6389, click on chat in the lower right, or let us call you back."
      cta="REQUEST A CALL"
    >
    </c360-card>
  `
}

import { fragmentFrom } from 'elix/src/core/htmlLiterals'
import docs from './docs.mdx'

export default {
  title: 'C360 Components/Card Group',
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
    <c360-card-group>
      <span slot="header">Want to learn more about Salesforce?</span>
      <c360-card
        slot="item"
        role="listitem"
        image="/demo/giraffe.jpg"
        title="Contact us"
        content="Call us at 1-800-667-6389, click on chat in the lower right, or let us call you back."
        cta="REQUEST A CALL"
      ></c360-card>
        
      <c360-card
        slot="item"
        role="listitem"
        image="/demo/lion.jpg"
        title="See it in action"
        content="Get an overview of what Salesforce can do for your business in our product demos."
        cta="WATCH DEMOS"
      ></c360-card>

      <c360-card
        slot="item"
        role="listitem"
        image="/demo/lizard.jpg"
        title="Get started now"
        content="Try Salesforce free for 30 days - no credit card required, no software to install."
        cta="TRY FOR FREE"
      ></c360-card>
      </c360-card-group>
  `
}

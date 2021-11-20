// sds imports
import SdsButton from '../src/sds/Button/button'
import SdsHeadline from '../src/sds/Headline/headline'

// c360 imports
import C360Button from '../src/c360/Button/button'
import C360Headline from '../src/c360/Headline/headline'
import C360Card from '../src/c360/Card/card'
import C360CardGroup from '../src/c360/CardGroup/card-group'

// global css import
import '../src/globals.css'

// Define SDS Web Components
customElements.define('sds-button', SdsButton)
customElements.define('sds-headline', SdsHeadline)

// Define C360 Web Components
customElements.define('c360-button', C360Button)
customElements.define('c360-headline', C360Headline)
customElements.define('c360-card', C360Card)
customElements.define('c360-card-group', C360CardGroup)

import { template } from 'elix/src/base/internal.js'
import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'

import SdsButton from '../../sds/Button/button'
import stylesheet from './button.css'

class C360Button extends SdsButton {
  get [template]() {
    const result = super[template]
    result.content.append(fragmentFrom.html`
      <style>
       ${stylesheet}
      </style>
    `)
    return result
  }
}

export default C360Button

import { template } from 'elix/src/base/internal.js'
import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'

import SdsHeadline from '../../sds/Headline/headline'
import stylesheet from './headline.css'

class C360Headline extends SdsHeadline {
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

export default C360Headline

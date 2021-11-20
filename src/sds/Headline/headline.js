import ReactiveElement from 'elix/src/core/ReactiveElement'
import { render, setState, state, template } from 'elix/src/base/internal.js'
import { fragmentFrom, templateFrom } from 'elix/src/core/htmlLiterals.js'

import common from '../common/common.css'
import stylesheet from './headline.css'

class SdsHeadline extends ReactiveElement {
  get level() {
    return this[state].level
  }

  set level(level) {
    this[setState]({
      level
    })
  }

  get [template]() {
    const { level } = this[state]

    const headlineTemplate = templateFrom.html`
      <${level}><slot></slot></${level}>
    `

    headlineTemplate.content.append(fragmentFrom.html`
          <style>
        ${common}
        ${stylesheet}
      </style>
`)

    return headlineTemplate
  }

  [render](changed) {
    super[render](changed)

    if (changed.level) {
      const { level } = this[state]

      this.level = level

      // query for current headline
      const headline = this.shadowRoot.children[0]

      // create new headline and duplicate content
      const newHeadline = document.createElement(this.level)
      newHeadline.innerHTML = headline.innerHTML

      // replace the old headline with the new one
      this.shadowRoot.removeChild(headline)
      this.shadowRoot.insertBefore(newHeadline, this.shadowRoot.firstChild)
    }
  }
}

export default SdsHeadline

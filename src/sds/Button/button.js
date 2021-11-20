import Button from 'elix/src/base/Button.js'
import {
  defaultState,
  render,
  setState,
  state,
  template
} from 'elix/src/base/internal.js'
import { fragmentFrom } from 'elix/src/core/htmlLiterals.js'

import common from '../common/common.css'
import stylesheet from './button.css'

class SdsButton extends Button {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      variant: ''
    })
  }

  // Variant Getter/Setter
  get variant() {
    return this[state].variant
  }

  set variant(variant) {
    this[setState]({
      variant
    })
  }

  // Template override
  get [template]() {
    const result = super[template]

    const inner = result.content.querySelector('[part~="inner"]')
    if (inner) {
      inner.part.add('button')
    }

    result.content.append(fragmentFrom.html`
      <style>
        ${common}
        ${stylesheet}
      </style>
    `)
    return result
  }

  // Change detector / dispatcher
  [render](changed) {
    super[render](changed)

    // Detects for changes to Variant state
    if (changed.variant) {
      const { variant } = this[state]

      if (variant) {
        this.setAttribute('variant', variant)
      } else {
        this.removeAttribute('variant')
      }
    }
  }
}

export default SdsButton

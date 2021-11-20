/**
 * This Class is built on top of Elix's "ReactiveElement"
 * base element. Think of this like React's Component class.
 *
 * Documentation on ReactiveElement can be found here:
 * https://component.kitchen/elix/ReactiveElement
 *
 * Also check out documentation on ReactiveMixin, to better
 * understand how component state is managed:
 * https://component.kitchen/elix/ReactiveMixin
 * (you can also see `src/sds/Button/button.js` for a state management example)
 */

import ReactiveElement from 'elix/src/core/ReactiveElement'
import { template } from 'elix/src/base/internal'
import { templateFrom } from 'elix/src/core/htmlLiterals.js'

import stylesheet from './card-group.css'

class C360CardGroup extends ReactiveElement {
  get [template]() {
    return templateFrom.html`
      <style>
        ${stylesheet}
      </style>

      <div>[Your Card Group Component Template Goes Here]</div>
    `
  }
}

export default C360CardGroup

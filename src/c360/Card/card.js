import ReactiveElement from 'elix/src/core/ReactiveElement'
import AriaRoleMixin from 'elix/src/base/AriaRoleMixin'
import { template, defaultState, state, setState } from 'elix/src/base/internal'
import { internal } from 'elix'
import { templateFrom } from 'elix/src/core/htmlLiterals.js'

import stylesheet from './card.css'

class C360Card extends AriaRoleMixin(ReactiveElement) {
  get [defaultState]() {
    return Object.assign(super[defaultState], {
      image: '',
      title: 'title',
      content: 'text content',
      buttonText: 'button text'
    })
  }

  // Image gets/sets state
  get image() {
    return this[state].image
  }

  set image(image) {
    this[setState]({ image })
  }

  // Title gets/sets state
  get title() {
    return this[state].title
  }

  set title(title) {
    this[setState]({ title })
  }

  // Content gets/sets state
  get content() {
    return this[state].content
  }

  set content(content) {
    this[setState]({ content })
  }

  // Button text gets/sets state
  get cta() {
    return this[state].cta
  }

  set cta(cta) {
    this[setState]({ cta })
  }

  [internal.render](changed) {
    super[internal.render](changed)

    if (changed.image) {
      if (this[state].image !== '') {
        this[internal.ids].image.setAttribute('displayimg', true)
        this[internal.ids].image.src = this[state].image
      }
    }
    if (changed.title) {
      this[internal.ids].title.textContent = this[state].title
    }
    if (changed.content) {
      this[internal.ids].content.textContent = this[state].content
    }
    if (changed.buttonText) {
      this[internal.ids].cta.textContent = this[state].cta
    }
    if (this[internal.firstRender]) {
      this[internal.ids].cta.addEventListener('click', () => {
        const event = new CustomEvent('ctaclick', {
          bubbles: true,
          composed: true,
          detail: { cta: this[state].cta }
        })
        this.dispatchEvent(event)
      })
    }
  }

  get [template]() {
    return templateFrom.html`
       <style>
         ${stylesheet}
       </style>
       <article class="card">
         <c360-headline level="h2" size="small" class="title"><span id="title"></span></c360-headline>
         <img class="image" id="image" src="" alt="" />
         <p class="content" id="content"></p>
         <c360-button variant="brand" id="cta"></c360-button>
       </article>
     `
  }
}

export default C360Card

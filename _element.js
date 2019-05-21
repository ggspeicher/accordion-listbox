import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `accordion-listbox`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class AccordionListbox extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'accordion-listbox',
      },
    };
  }
}

window.customElements.define('accordion-listbox', AccordionListbox);

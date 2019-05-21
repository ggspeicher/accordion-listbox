import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'accordion-item/accordion-item.js'
import 'api-shapes/api-shapes.js'

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
        html {
          --accordion-item-main: {
            padding: 0px;
          }
        }
        :host {
          display: block;

          --accordion-item-main: {
            padding: 0px;
          }
        }
        accordion-item {
          margin: 0px;
          padding: 0px;
        }
        api-shapes {
          margin: 0px;
          padding: 0px;
        }
      </style>
      <template is="dom-repeat" items=[[items]] as="item">
        <accordion-item title="[[item.title]]" subtitle="[[item.subtitle]]">
          <api-shapes slot="icon" method=[[item.method]]></api-shapes>
          <h2>[[item.title]]</h2>
          <p>[[item.descripcion]]</p>
          <p>Llamado:</p>


        </accordion-item>
      </template>
    `;
  }
  static get properties() {
    return {
      items: {
        type: Array,
        value: [
          {
            method: 'GET',
            title: 'sarasa',
            subtitle: '/post/sarasa',
            descripcion: 'Esto es una sarasa'
          },
          {
            method: 'POST',
            title: 'sarasa 2',
            subtitle: '/post/sarasa2',
            descripcion: 'Esto es una sarasa 2'
          }
        ]
      }
    };
  }
}

window.customElements.define('accordion-listbox', AccordionListbox);

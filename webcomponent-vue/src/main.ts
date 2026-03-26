import { defineCustomElement } from 'vue'
import Count from './components/Count.ce.vue'

// convertir a custom element
const WcCount = defineCustomElement(Count)

// registrar en el navegador
customElements.define('wc-counter', WcCount)
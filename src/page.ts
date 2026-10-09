import { el } from './lib/el'
import { about } from './components/about'
import { contact } from './components/contact'
import { footer } from './components/footer'
import { header } from './components/header'
import { hero } from './components/hero'

export function mount(root: HTMLElement) {
  const page = el('div', 'page', [header(), hero(), about(), contact(), footer()])
  page.id = 'top'
  root.replaceChildren(page)
}

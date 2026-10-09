import { el } from './lib/el'
import { about } from './components/about'
import { contact } from './components/contact'
import { footer } from './components/footer'
import { header } from './components/header'
import { hero } from './components/hero'

export function bind(root: ParentNode = document) {
  for (const form of root.querySelectorAll('form')) {
    form.addEventListener('submit', (event) => event.preventDefault())
  }
}

export function mount(root: HTMLElement) {
  const page = el('div', 'page', [header(), el('main', '', [hero(), about(), contact()]), footer()])
  page.id = 'top'
  bind(page)
  root.replaceChildren(page)
}

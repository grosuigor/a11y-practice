import { nav } from '../data/nav'
import { el, text } from '../lib/el'

export function navMenu() {
  const items = nav.flatMap((item, index) => {
    const link = text('a', 'nav__link', item.label)
    link.setAttribute('href', item.href)
    return index === 0 ? [link] : [el('span', 'nav__rule'), link]
  })

  const lang = el('button', 'nav__lang', [text('span', '', 'Eng'), el('img')])
  const arrow = lang.querySelector('img')!
  arrow.src = '/icons/arrow.svg'
  arrow.alt = ''
  arrow.width = 24
  arrow.height = 24
  lang.type = 'button'
  lang.setAttribute('aria-label', 'Language')

  return el('nav', 'nav', [...items, el('span', 'nav__rule'), lang])
}

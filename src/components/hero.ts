import { heroBody } from '../data/copy'
import { el, text } from '../lib/el'
import { button } from './button'

export function hero() {
  const image = el('img', 'hero__photo')
  image.src = '/images/hero.png'
  image.alt = 'Monstera leaves covered in water drops'
  image.width = 648
  image.height = 648
  image.setAttribute('fetchpriority', 'high')

  return el('section', 'hero', [
    el('div', 'hero__copy', [
      text('h1', 'hero__title', 'Lorem ipsum dolor sit amet'),
      text('p', 'hero__lead', 'Lorem ipsum dolor sit amet'),
      text('p', 'hero__body', heroBody),
      button('Buy Now', 'button'),
    ]),
    image,
  ])
}

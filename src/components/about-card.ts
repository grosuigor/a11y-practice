import { el, text } from '../lib/el'

type Card = { title: string; body: string; image: string }

export function aboutCard(card: Card) {
  const image = el('img', 'card__photo')
  image.src = card.image
  image.alt = ''
  image.width = 180
  image.height = 230

  const link = text('a', 'card__link', 'Learn more about →')
  link.href = '#about'

  return el('article', 'card', [
    image,
    el('div', 'card__copy', [text('h2', 'card__title', card.title), text('p', 'card__body', card.body), link]),
  ])
}

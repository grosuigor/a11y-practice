import { contactRows, socials } from '../data/contacts'
import { el, icon, text } from '../lib/el'
import { contactRow } from './contact-row'

function photo() {
  const image = el('img', 'aside__photo')
  image.src = '/images/contact.png'
  image.alt = ''
  return image
}

export function contactAside() {
  const links = socials.map((item) => {
    const link = el('a', 'aside__social', [icon(item.icon)])
    link.href = '#contact'
    link.setAttribute('aria-label', item.label)
    return link
  })

  return el('aside', 'aside', [
    photo(),
    text('h2', 'aside__title', 'Contact Us'),
    text('p', 'aside__text', 'Fill up the form and ur Team will get back to you within 24 hours. Happy to see your message!'),
    el('ul', 'aside__list', contactRows.map(contactRow)),
    el('div', 'aside__socials', links),
  ])
}

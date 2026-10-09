import { nav } from '../data/nav'
import { el, text } from '../lib/el'
import { button } from './button'

function subscribeForm(email: HTMLInputElement) {
  const node = button('Subscribe', 'button button--wide')
  node.type = 'submit'
  return el('form', 'subscribe', [email, node])
}

export function footer() {
  const links = nav.map((item) => {
    const link = text('a', 'footer__link', item.label)
    link.href = item.href
    return link
  })

  const email = el('input', 'subscribe__input')
  email.type = 'email'
  email.placeholder = 'example@gmail.com'
  email.setAttribute('aria-label', 'Email for subscription')

  const visa = el('img', 'pay')
  visa.src = '/images/visa.png'
  visa.alt = 'Visa'
  visa.width = 50
  visa.height = 28
  const card = el('img', 'pay pay--wide')
  card.src = '/images/mastercard.png'
  card.alt = 'Mastercard'
  card.width = 50
  card.height = 41

  const mail = text('a', 'footer__mail', 'plantme.store@gmail.com')
  mail.href = 'mailto:plantme.store@gmail.com'

  return el('footer', 'footer', [
    el('div', 'footer__main', [
      el('div', 'footer__brand', [
        text('p', 'footer__name', 'PlantMe'),
        text('p', 'footer__note', 'Subscribe and be the first to know about our news and promotions.'),
        subscribeForm(email),
      ]),
      el('nav', 'footer__nav', links),
      el('div', 'footer__contacts', [
        text('p', 'footer__heading', 'Contacts'),
        text('p', 'footer__muted', '+38 063 072 0121'),
        mail,
        el('div', 'footer__pay', [visa, card]),
      ]),
    ]),
    el('div', 'footer__bar', [
      text('p', '', '© 2022 PlantMe. All Rights Reserved'),
      el('div', 'footer__legal', ['#privacy', '#terms', '#language'].map((href, index) => {
        const link = text('a', '', ['Privacy Policy', 'Terms of service', 'Language'][index])
        link.href = href
        return link
      })),
    ]),
  ])
}

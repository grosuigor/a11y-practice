import { el } from '../lib/el'
import { contactAside } from './contact-aside'
import { contactForm } from './contact-form'

export function contact() {
  const section = el('section', 'contact', [el('div', 'contact__card', [contactAside(), contactForm()])])
  section.id = 'contact'
  return section
}

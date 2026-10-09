import { el, text } from '../lib/el'
import { button } from './button'
import { checkbox } from './checkbox'
import { field } from './field'
import { phoneField } from './phone-field'
import { roleGroup } from './roles'

function submit(label: string) {
  const node = button(label)
  node.type = 'submit'
  return node
}

export function contactForm() {
  const message = el('textarea', 'field__input field__input--area')
  message.name = 'message'
  message.placeholder = 'Text here...'
  message.rows = 4

  const form = el('form', 'form', [
    el('div', 'form__row', [
      field({ label: 'First Name', name: 'firstName', required: true }),
      field({ label: 'Last Name', name: 'lastName', required: true, value: 'Doe' }),
    ]),
    el('div', 'form__row', [
      field({ label: 'Email', name: 'email', value: 'example@gmail.com' }),
      phoneField(),
    ]),
    roleGroup(),
    el('label', 'field field--wide', [text('span', 'field__label', 'Message'), message]),
    el('div', 'form__checks', [checkbox('terms', 'Accept the Terms'), checkbox('terms2', 'Accept the Terms 2', true)]),
    submit('Send Message'),
  ])
  form.addEventListener('submit', (event) => event.preventDefault())
  return form
}

import { roles } from '../data/roles'
import { el, icon, text } from '../lib/el'

export function roleGroup() {
  const items = roles.map((role, index) => {
    const input = el('input', 'choice__input')
    input.type = 'radio'
    input.name = 'role'
    input.value = role
    input.checked = index === 0
    return el('label', 'choice', [
      input,
      icon('/icons/radio-on.svg'),
      icon('/icons/radio-off.svg'),
      text('span', 'choice__label', role),
    ])
  })
  return el('div', 'choices', items)
}

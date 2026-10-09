import { el, icon, text } from '../lib/el'

export function checkbox(name: string, label: string, checked = false) {
  const input = el('input', 'check__input')
  input.type = 'checkbox'
  input.name = name
  input.checked = checked
  return el('label', 'check', [input, icon('/icons/checkbox.svg'), icon('/icons/checkmark.svg'), text('span', '', label)])
}

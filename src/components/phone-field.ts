import { el, icon, text } from '../lib/el'

export function phoneField() {
  const code = el('select', 'phone__code', [text('option', '', '+380')])
  code.name = 'code'
  code.setAttribute('aria-label', 'Country code')

  const input = el('input', 'phone__number')
  input.name = 'phone'
  input.placeholder = '00 000 00 00'
  input.setAttribute('aria-label', 'Phone number')

  const control = el('div', 'phone__control', [code, icon('/icons/arrow-sm.svg'), text('span', 'phone__caret', '|'), input])
  return el('label', 'field', [text('span', 'field__label', 'Phone Number'), control])
}

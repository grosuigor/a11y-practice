import { el, text } from '../lib/el'

type Field = { label: string; name: string; required?: boolean; value?: string; placeholder?: string }

export function field({ label, name, required, value, placeholder }: Field) {
  const caption = text('span', 'field__label', label)
  if (required) caption.prepend(text('span', 'field__mark', '* '))

  const input = el('input', 'field__input')
  input.name = name
  input.id = name
  if (required) input.required = true
  if (value) input.value = value
  if (placeholder) input.placeholder = placeholder
  return el('label', 'field', [caption, input])
}

import { el, icon } from '../lib/el'

export function search() {
  const input = el('input', 'search__input')
  input.type = 'search'
  input.placeholder = 'Search this site'
  input.setAttribute('aria-label', 'Search this site')

  const button = el('button', 'search__button', [icon('/icons/search.svg')])
  button.type = 'submit'
  button.setAttribute('aria-label', 'Search')

  return el('form', 'search', [input, button])
}

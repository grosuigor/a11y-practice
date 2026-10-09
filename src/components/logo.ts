import { el } from '../lib/el'

export function logo() {
  return el('a', 'logo', [
    el('span', 'logo__top'),
    el('span', 'logo__row', [el('span', 'logo__light'), el('span', 'logo__fill')]),
  ])
}

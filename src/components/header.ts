import { el } from '../lib/el'
import { logo } from './logo'
import { navMenu } from './nav'
import { search } from './search'

export function header() {
  const brand = logo()
  brand.href = '#top'
  brand.setAttribute('aria-label', 'PlantMe')
  return el('header', 'header', [el('div', 'header__bar', [brand, navMenu(), search()])])
}

import { aboutCards } from '../data/about'
import { el } from '../lib/el'
import { aboutCard } from './about-card'

export function about() {
  const section = el('section', 'about', aboutCards.map(aboutCard))
  section.id = 'about'
  return section
}

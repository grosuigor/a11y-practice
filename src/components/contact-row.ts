import { el, icon, text } from '../lib/el'

type Row = { icon: string; label: string; href?: string }

export function contactRow(row: Row) {
  const label = row.href ? text('a', 'aside__label', row.label) : text('span', 'aside__label', row.label)
  if (row.href && label instanceof HTMLAnchorElement) label.href = row.href
  return el('li', 'aside__row', [icon(row.icon), label])
}

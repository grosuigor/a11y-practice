import { text } from '../lib/el'

export function button(label: string, className = 'button') {
  const node = text('button', className, label)
  node.type = 'button'
  return node
}

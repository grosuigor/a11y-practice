type Child = Node | string

export function el<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  className = '',
  children: Child[] = [],
): HTMLElementTagNameMap[T] {
  const node = document.createElement(tag)
  if (className) node.className = className
  node.append(...children)
  return node
}

export function text<T extends keyof HTMLElementTagNameMap>(tag: T, className: string, value: string) {
  const node = el(tag, className)
  node.textContent = value
  return node
}

const iconSize: Record<string, [number, number]> = {
  '/icons/search.svg': [32, 32],
  '/icons/social.svg': [32, 32],
  '/icons/arrow-sm.svg': [22, 22],
  '/icons/checkmark.svg': [18, 18],
}

export function icon(src: string) {
  const node = document.createElement('img')
  const [width, height] = iconSize[src] ?? [24, 24]
  node.src = src
  node.alt = ''
  node.width = width
  node.height = height
  return node
}

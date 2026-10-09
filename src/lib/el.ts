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

export function icon(src: string) {
  const node = document.createElement('img')
  node.src = src
  node.alt = ''
  return node
}

import { defineConfig, type Plugin } from 'vite'
import { parseHTML } from 'linkedom'
import { mount } from './src/page.ts'

function prerender(): Plugin {
  return {
    name: 'prerender-html',
    apply: 'build',
    transformIndexHtml(html) {
      const { document } = parseHTML('<!doctype html><html><body></body></html>')
      const view = document.defaultView
      Object.assign(globalThis, {
        window: view,
        document,
        HTMLElement: view.HTMLElement,
        HTMLAnchorElement: view.HTMLAnchorElement,
        HTMLInputElement: view.HTMLInputElement,
        HTMLImageElement: view.HTMLImageElement,
        HTMLButtonElement: view.HTMLButtonElement,
        HTMLSelectElement: view.HTMLSelectElement,
        HTMLTextAreaElement: view.HTMLTextAreaElement,
        HTMLOptionElement: view.HTMLOptionElement,
        Node: view.Node,
        SVGElement: view.SVGElement,
      })
      mount(document.body)
      return html.replace('<body>', `<body>\n    ${document.body.innerHTML}`)
    },
  }
}

export default defineConfig({
  plugins: [prerender()],
})

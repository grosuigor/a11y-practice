import './styles/index.css'
import { bind, mount } from './page'

const page = document.getElementById('top')
if (page) bind(page)
else mount(document.body)

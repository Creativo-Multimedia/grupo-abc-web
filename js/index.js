import { renderDate } from './render-date.js'
import { hideLoader } from './hide-loader.js'

const d = document

d.addEventListener('DOMContentLoaded', e => {
    renderDate()
    hideLoader()
})

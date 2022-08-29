import { renderDate } from './render-date.js'
import { hideLoader } from './hide-loader.js'
import { scrollToTop } from './scroll-to-top.js'
import contactFormValidations from './contactFormValidations.js'

const d = document

d.addEventListener('DOMContentLoaded', e => {
    renderDate()
    hideLoader()
    scrollToTop('.scroll-top-btn', '.scroll-top-btn i')
    contactFormValidations()
})

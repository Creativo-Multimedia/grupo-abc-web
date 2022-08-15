const d = document,
    w = window

export const scrollToTop = (btn, icon) => {
    const $scrollBtn = d.querySelector(btn)
    const $scrollIcon = d.querySelector(icon)
    w.addEventListener('scroll', e => {
        let scrollTop = w.pageYOffset || d.scrollTop
        if (scrollTop > 600) {
            $scrollBtn.classList.remove('d-none')
        } else {
            $scrollBtn.classList.add('d-none')
        }
    })
    d.addEventListener('click', e => {
        if (e.target.matches(btn) || e.target.matches(icon)) {
            w.scrollTo({
                behavior: 'smooth',
                top: 0
            })
        }
    })
}
export const renderDate = () => {
    let $currentYear = new Date().getFullYear()
    document.getElementById('date').innerText = $currentYear
}
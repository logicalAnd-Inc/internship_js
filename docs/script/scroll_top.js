const scroll_to_top = (event) => {
    window.scroll({top: 0, behavior: 'smooth'})
}
const headerTitle = document.querySelector('#header_title')
headerTitle.onclick = scroll_to_top

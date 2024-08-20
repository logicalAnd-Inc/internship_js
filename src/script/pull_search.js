const open_search_window = (event) => {
    slide(btnPull, windowSearch)
}

const close_search_window = (event) => {
    slide(windowSearch, btnPull)
}

const search_tips = (event) => {
    alert('この機能は未実装です。')
}

const slide = (close_element, open_element) => {
    close_element.style.right = '-' + close_element.offsetWidth + 'px'
    open_element.style.right = '40px'
}

const btnPull = document.querySelector('#kail_pull')
const btnClose = document.querySelector('#kail_close')
const btnSearch = document.querySelector('#kail_search')
const windowSearch = document.querySelector('#kail_window')
btnPull.onclick = open_search_window
btnClose.onclick = close_search_window
btnSearch.onclick = search_tips
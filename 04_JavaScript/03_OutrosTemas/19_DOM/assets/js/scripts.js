let body = document.getElementsByTagName('body')[0]
let footer = document.getElementsByTagName('footer')[0]
let title = document.getElementById('page-title')
let btn = document.getElementById('mode-selector')
let darkModeClass = 'dark-mode'

function darkMode(){
    changeClasses()
    changeText()
}

function changeClasses(){
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    title.classList.toggle(darkModeClass)
    btn.classList.toggle(darkModeClass)
}

function changeText(){
    let lightMode = 'Light Mode'
    let darkMode = 'Dark Mode'
    if(btn.classList.contains(darkModeClass)){
        btn.innerHTML = lightMode
        title.innerHTML = darkMode + ' ON'
        return
    }
    btn.innerHTML = darkMode
    title.innerHTML = lightMode + ' ON'
}
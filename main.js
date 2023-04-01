const element = document.getElementById("main")

if (localStorage.text) {
    element.innerHTML = localStorage.text
} else localStorage.text = element.innerHTML

function Reload() {
    window.location.reload()
}

function Reset() {
    localStorage.text = ""
    element.innerHTML = localStorage.text
    Reload()
}

window.addEventListener('keydown', e => {
    localStorage.text += `${e.key == " " ? "Space" : e.key} `
    element.innerHTML = localStorage.text
})
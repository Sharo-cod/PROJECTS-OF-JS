const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")

inputEl.checked = false;

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black"
    }else{
        bodyEl.style.background = "white"
    }
}
updateBody()


inputEl.addEventListener("input", ()=>{
    updateBody()
})
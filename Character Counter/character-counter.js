const textAreaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counters")
const remainingCounterEl = document.getElementById("remaining-counters")

textAreaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length;
    remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length ;
}
updateCounter()

const btnEl = document.getElementById("Calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip")
const total = document.getElementById("total");



function calculateTotal(){
    const billvalue = billInput.value;
    const tipvalue = tipInput.value;
    const TotalValue = billvalue * (1 + tipvalue  / 100 )
    total.innerText = `Total: ${TotalValue.toFixed(2)}`;

    
}

btnEl.addEventListener("click", calculateTotal)
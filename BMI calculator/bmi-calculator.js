const btnEl = document.getElementById("btn");
const bmiInputel = document.getElementById("bmi-result")


function calculateBMI(){
    const heightValue = document.getElementById("height").value
    const weightValue = document.getElementById("weight").value
    
    const bmiValue = weightValue / (heightValue * heightValue)
    
    bmiInputel.value = bmiValue

}

btnEl.addEventListener("click", calculateBMI)
function CalculateLoan() {
    loanAmountvalue = document.getElementById("loan-amount").value
    interestRateValue = document.getElementById("interest-rate").value
    MonthsToPayValue = document.getElementById("months-to-pay").value

    interest = (loanAmountvalue * (interestRateValue * 0.01)) / MonthsToPayValue
    monthlyPayment = (loanAmountvalue / MonthsToPayValue + interest).toFixed(2)

    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthlyPayment}`

}
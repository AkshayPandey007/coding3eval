// Store the wallet amount to your local storage with key "amount"

document.querySelector("#add_to_wallet").addEventListener("click",myFun)

var pasiaData = JSON.parse(localStorage.getItem("amount")) || []
function myFun()
{
    var amount = document.querySelector("#amount").value
    
    var wallet = document.querySelector("#wallet").innerText=amount
    pasiaData.push(wallet)
    localStorage.setItem("amount",JSON.stringify(pasiaData))
}
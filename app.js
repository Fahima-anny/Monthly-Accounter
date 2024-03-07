document.getElementById("calcuBtn").addEventListener("click",function(){
    let incomeInp = document.getElementById("incomeInp")
    let incomeInpTxt = incomeInp.value 
    let incomeInpInt = parseInt(incomeInpTxt)

    let foodInp = document.getElementById("foodInp")
    let foodInpTxt = foodInp.value 
    let foodInpInt = parseInt(foodInpTxt)

    let rentInp = document.getElementById("rentInp")
    let rentInpTxt = rentInp.value 
    let rentInpInt = parseInt(rentInpTxt)
    
    let clothInp = document.getElementById("clothInp")
    let clothInpTxt = clothInp.value 
    let clothInpInt = parseInt(clothInpTxt)

  let expencesDiv = document.getElementById("expencesDiv")

 let totalExpence = foodInpInt + rentInpInt + clothInpInt 

 expencesDiv.innerText = totalExpence

 let balancesDiv = document.getElementById("balancesDiv")
 let balancesDivTxt = balancesDiv.innerText
 let balancesDivInt = parseInt(balancesDivTxt) 

let Balance = incomeInpInt - totalExpence

 balancesDiv.innerText = Balance

})






document.getElementById("saveBtn").addEventListener("click",function(){

let saveInp = document.getElementById("saveInp")
let saveInpTxt = saveInp.value 
let saveInpInt = parseInt(saveInpTxt)

let balancesDiv = document.getElementById("balancesDiv")
let balanceTxt = balancesDiv.innerText
let balanceInt = parseInt(balanceTxt)

let savingAmount = document.getElementById("savingAmount")
let savingAmountF =  balanceInt * (saveInpInt/100)
 savingAmount.innerText = savingAmountF


let remainedMoney = document.getElementById("remainedMoney")
remainedMoney.innerText = balanceInt - savingAmountF

})




















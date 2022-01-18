const bill = document.getElementById("Bill");
const numbOfPeople = document.getElementById("PopleAmount");
const result = document.getElementById("Result");

result.style.display = "none";
const calculator = document.getElementById("calculate");
calculator.addEventListener("click", calculateTip);
let ServiceQual = document.getElementById("ServiceQual");
function calculateTip() {
    if (bill.value === "" || ServiceQual.value === 0) {
        alert("please enter a value")
        return;
    }

    if (numbOfPeople.value === "" || numbOfPeople.value <= 1) {
        numbOfPeople.value = 1;
        result.style.display = "none";
    }
    else {
        result.style.display = "block";
    }
    let totalTip = bill.value * ServiceQual.value;
    let divTip = totalTip / numbOfPeople.value;
    let totalBill = totalTip + parseInt(bill.value);
    let divBillTip = totalBill / numbOfPeople.value;

    document.getElementById("Result").style.display = "block";
    document.getElementById("Tip").innerText = "$" + totalTip;
    document.getElementById("Total_Bill_Tip").innerHTML = "s" + totalBill.toFixed(2);
    document.getElementById("Div_Tip").innerHTML = "$" + divTip.toFixed(2)
    document.getElementById("Div_Tip_Person").innerHTML = "$" + divBillTip.toFixed(2)

}

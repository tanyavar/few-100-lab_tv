import './styles.css';

document.getElementById("totalTip").style.visibility="hidden";
//Calculate Tip
function calculateTip(tipPrct) {
  document.getElementById("billamt").className = document.getElementById("billamt").className.replace(" error","");
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = tipPrct;

  //validate 
  if (billAmt === "" ||  isNaN(billAmt) || Number(billAmt )  <= 0){
    alert("Please enter valid numeric value");
    document.getElementById("billamt").className = document.getElementById("billamt").className + " error";
    document.getElementById("billamt").value = "";
    clearInputs();
    return;
  }
 
  //Calculate tip
  var total = (billAmt * serviceQual) ;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
//Calculate total with tip
  var totBill =  Number(billAmt )+ Number(total);
   totBill = totBill.toFixed(2);

  //Display 
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
  document.getElementById("tipPrcnt").innerHTML = serviceQual *100;
  document.getElementById("bill").innerHTML = billAmt;
  document.getElementById("Prcnt").innerHTML = serviceQual *100;
  document.getElementById("totalPay").innerHTML = totBill;
  document.getElementById("totalTip").style.visibility="visible";

}

function clearInputs(){
  document.getElementById("tip").innerHTML= "";
  document.getElementById("bill").innerHTML = "";
  document.getElementById("Prcnt").innerHTML = "";
  document.getElementById("totalPay").innerHTML = "";
}

// hide on load
//document.getElementById("each").style.display = "none";


document.getElementById("10").onclick = function() {
   calculateTip(0.1);
   document.getElementById("10").disabled=true;
   document.getElementById("15").disabled=false;
   document.getElementById("20").disabled=false;
};
document.getElementById("15").onclick = function() {
  calculateTip(0.15);
  document.getElementById("15").disabled=true;
  document.getElementById("10").disabled=false;
   document.getElementById("20").disabled=false;
};
document.getElementById("20").onclick = function() {
  calculateTip(0.20);
  document.getElementById("20").disabled=true;
  document.getElementById("10").disabled=false;
  document.getElementById("15").disabled=false;
};
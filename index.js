function add(){
    let num1 =document.getElementById("1num").value;
    let num2 =document.getElementById("2num").value;
    let total = Number(num1)+ Number(num2);
document.getElementById("results").innerHTML = total;
}

function subtract(){
    let num1 =document.getElementById("1num").value;
    let num2 =document.getElementById("2num").value;
    let total = Number(num1)- Number(num2);
document.getElementById("results").innerHTML = total;
}

function multiply(){
    let num1 =document.getElementById("1num").value;
    let num2 =document.getElementById("2num").value;
    let total = Number(num1)* Number(num2);
document.getElementById("results").innerHTML = total;
}

function divide(){
 if (num2 =="0")
{
    document.getElementById("results").innerHTML = "cannot devide by javascript classwork02 zero";
}
  else{
    let total = Number(num1)/ Number(num2);
    document.getElementById("results").innerHTML = total;
  }  

}

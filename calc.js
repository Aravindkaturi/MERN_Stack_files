function add(){
    let a= document.getElementById('first').value
    let b= document.getElementById('second').value
    let num1=parseInt(a,10)
    let num2=parseInt(b,10)
    let res=num1+num2
    document.getElementById('result').textContent="✅ Result = " + res;
}
function sub(){
    let a= document.getElementById('first').value
    let b= document.getElementById('second').value
    let num1=parseInt(a,10)
    let num2=parseInt(b,10)
    let res=num1-num2
    document.getElementById('result').textContent="✅ Result = " + res;
}
function mul(){
    let a= document.getElementById('first').value
    let b= document.getElementById('second').value
    let num1=parseInt(a,10)
    let num2=parseInt(b,10)
    let res=num1*num2
    document.getElementById('result').textContent="✅ Result = " + res;
}
function div(){
    let a= document.getElementById('first').value
    let b= document.getElementById('second').value
    let num1=parseInt(a,10)
    let num2=parseInt(b,10)
    let res=num1/num2
    document.getElementById('result').textContent="✅ Result = " + res;
}
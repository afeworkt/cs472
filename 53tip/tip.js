function calcTip() {
	var subtotalElem = document.getElementById('subtotal');
	var tipElem = document.getElementById('tip');
	var totalElem = document.getElementById('total');
	var subtotal = parseFloat(subtotalElem.value);
	var tip = (subtotal * parseFloat(tipElem.value))/100;
    console.log(tip);
    console.log(subtotal);
    if(isNaN(tip)||isNaN(subtotal)){
        alert("Please enter a valid value!");
        tipElem.value='';
        subtotalElem.value='';
	    totalElem.innerHTML = '$';
        return;
    }
    if(tip>subtotal){
        alert("Tip can not exceed the subtotal!");
        tipElem.value='';
	    totalElem.innerHTML = '$';
        return;
    }else{
	    var total = subtotal+tip;
	    totalElem.innerHTML = '$' + total;
    }
}
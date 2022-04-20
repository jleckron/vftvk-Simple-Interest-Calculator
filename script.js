
// Compute interest calculation on button press
function compute() {
    var p = document.getElementById("principal");
    let principal = p.value
    //principal form validation
    if(principal<=0) {
        alert("Enter a positive number")
        p.focus()
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate/100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit \<span>"+principal
        +"</span>,\<br\>at an interest rate of \<span>"+rate
        +"%</span>\<br\>You will receive an amount of \<span>"+interest
        +"</span>,\<br\>in the year \<span>"+year+"</span>\<br\>"
    }
}

// Update rate display on slider change
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

}


        

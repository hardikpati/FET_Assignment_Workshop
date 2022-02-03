
function calculate() {
    var principle = document.getElementById("principle").value;
    var rateOfInterest = document.getElementById("rateOfInterest").value;
    var period = document.getElementById("period").value;

    var amount = principle * Math.pow((1 + (rateOfInterest / 100)), period);
    var compoundInterest = amount - principle;
    console.log(amount);
    console.log(compoundInterest);
    document.getElementById("result").innerHTML = compoundInterest;
    return compoundInterest;
}

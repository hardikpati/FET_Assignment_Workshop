var msg;
var headParam = 100;
var bodyParam = 50;
msg="<p><code>The script is located in external script file called math.js</code></p>";
function addNumbers(headParam, bodyParam) {
    return headParam + bodyParam;
}

var result = addNumbers(headParam, bodyParam);
console.log(result);
document.getElementById("result").innerHTML = ("Addition of "+headParam+ " and " +bodyParam+ " is: " +result);
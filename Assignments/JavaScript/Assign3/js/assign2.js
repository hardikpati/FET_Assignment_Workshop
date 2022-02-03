var companyName = "”Cybage Software Pvt Ltd";

function searchChar() {
    var str = document.getElementById("character").value;
    var char = str.toString();
    console.log(char);
    var result = companyName.indexOf(str);
    if (result == -1) {
        document.getElementById("msg").innerHTML = "Character " + char + " not found";
    }
    else {
        document.getElementById("msg").innerHTML = "Character " + char + " is found at position " + result;
    }
    return result;
}


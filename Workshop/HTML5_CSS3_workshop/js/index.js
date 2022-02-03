function openAddForm() {
    document.getElementById("addForm").style.display = "block";
}

function addForm() {
    
}

function openRemoveForm() {
    document.getElementById("removeForm").style.display = "block";
}

function openList() {
    document.getElementById("bookList").style.display = "block";
}

function addForm() {
    document.getElementById("")
}

var form = document.getElementById("formSubmission");

var table = document.getElementById("data");
form.addEventListener("submit",(e)=> {
    e.preventDefault();
    submit();
})

const submit=()=>{
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let date = document.getElementById("date").value;
    let price = document.getElementById("price").value;

    var newArray = [id, name, author, date, price];
    newArray.forEach((item)=>{
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li);
    })
    form.reset();
}
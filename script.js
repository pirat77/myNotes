document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();
    let form = document.getElementById('noteForm');
    let formData = new FormData(form);
    let JSONdata = JSON.stringify(formData);
    localStorage.setItem((localStorage.length+1).toString(), JSONdata);
});

function readItem() {
    let items = [];
    for (let i = 1; i <= localStorage.length; i++) {
        items.push("<li id='" + i.toString() + "'>" + JSON.parse(localStorage.getItem(i.toString())) + "</li>" );
    }
    $("<ul/>", {
        "class": "notes",
        html: items.join("")
    }).appendTo("body");
}

readItem();
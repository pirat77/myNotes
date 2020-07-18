document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();
    let note = document.getElementById('content').value;
    let JSONdata = JSON.stringify(note);
    localStorage.setItem((localStorage.length+1).toString(), JSONdata);
    readItems();
});

document.getElementById("clear").addEventListener("click", function(event){
    event.preventDefault();
    let items = [];
    for (let i = 1; i <= localStorage.length; i++) {
        items.push(JSON.parse(localStorage.getItem(i.toString())));
    }
    localStorage.clear();
    items.forEach(item => {
        if (item !== 'solved') {
            let JSONdata = JSON.stringify(item);
            localStorage.setItem((localStorage.length+1).toString(), JSONdata);
        }
    })
    readItems();
});

function readItems() {
    let items = [];
    for (let i = 1; i <= localStorage.length; i++) {
        items.push("<li class=\"note\" id='" + i.toString() + "'>" + JSON.parse(localStorage.getItem(i.toString())) + "</li>");
    }
    document.getElementById("notesList").innerHTML = items.join("");
    allowRemoval();
}

function allowRemoval(){
        document.querySelectorAll('.note').forEach(item => {
            item.addEventListener('mouseover', function(event){
                item.style.color = 'red';
            })
            item.addEventListener('mouseleave', function(event){
                item.style.color = 'black';
            })
            item.addEventListener('click', function(event){
                localStorage.setItem(item.id, JSON.stringify("solved"));
                readItems();
            })
        })
}

readItems();
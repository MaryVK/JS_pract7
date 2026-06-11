//  1

let value = 0;

const digit = document.getElementById("value");
const up = document.getElementById("up");
const down = document.getElementById("down");

up.onclick = function() {
    value++;
    digit.textContent = value;
}

down.onclick = function() {
    value--;
    digit.textContent = value;
}


//  2

const colors = document.getElementById("colors");
const btn = document.getElementById("btn");
const container2 = document.getElementById("container2");

let count = 0;
let row;

btn.onclick = function() {
    if(count % 10 === 0) {    
        row = document.createElement("div");
        row.style.display = "flex";
        row.style.gap = "5px";
        colors.appendChild(row);
    }

    let block = document.createElement("div");
    block.style.height = "30px";
    block.style.width = "50px";

    //  рандомный цвет блоков по ргб
    let r = Math.floor(Math.random() * 256);  
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 

    block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


    block.onclick = function() {
        block.remove();
    }; 

    row.appendChild(block);
    count++;
};


//   3

const text = document.getElementById("txt");
const Colors = document.querySelectorAll(".color");

for(let i = 0; i < Colors.length; i++) {
    Colors[i].onclick = function() {
        let color = Colors[i].getAttribute("data-color");
        text.style.color = color;
    };
}


//   4

const comments = document.getElementById("comments");
const btn2 = document.getElementById("btn2");

btn2.onclick = function() {
    let name = document.getElementById("name").value;
    let text = document.getElementById("text").value;

    // проверка
    if(name === "" || text === "") {
        alert("All fields must be filled in !");
        return;
    }

    let comment = document.createElement("div");
    comment.className = "comment";

    let date = new Date();

    comment.innerHTML = `<div class="info">${name}</div>
                              <div>${text}</div>`;
    comments.appendChild(comment);
    document.getElementById("name").value = "";
    document.getElementById("text").value = "";
};


//   5

const contries = [
    "Argentina",
    "Australia",
    "Brazil",
    "Bolivia",
    "Italy",
    "Germany",
    "Ireland",
    "Poland",
    "Spain",
    "Greece",
    "Sweden",
    "India",
    "Finland",
    "China",
    "Netherlands",
    "France",
    "Japan",
    "Norway",
    "Portugal",
    "Belgium"
];

const input = document.getElementById("country");
const suggestions = document.getElementById("suggestions");

input.oninput = function() {
    let text = input.value.toLowerCase();
    suggestions.innerHTML = "";
    
    if(text === "") {
        return;
    }

    let count = 0;

    for(let i = 0; i < contries.length; i++) {

        if(contries[i].toLocaleLowerCase().startsWith(text) && count < 10) {

            let div = document.createElement("div");
            div.className = "item";
            div.textContent = contries[i];

            div.onclick = function() {
                input.value = contries[i];
                suggestions.innerHTML = "";
            };

            suggestions.appendChild(div);
            count++;
        }
    }
};


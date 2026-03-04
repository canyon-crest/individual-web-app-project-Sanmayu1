let colorBtn = document.getElementById("colorBtn");
let addBtn = document.getElementById("addBtn");

colorBtn.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "lightpink") {
        document.body.style.backgroundColor = "pink";
    } else {
        document.body.style.backgroundColor = "lightpink";
    }
});

addBtn.addEventListener("click", function() {
    let input = document.getElementById("userInput");
    let list = document.getElementById("outputList");

    if (input.value.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
});
function greet() {
    var name = document.getElementById("nameInput").value;
    var greeting = document.getElementById("greeting");
    if (name.trim() !== "") {
        greeting.textContent = "Hello, " + name + "!";
    } else {
        greeting.textContent = "Please enter your name!";
    }
}
let randomStrings = [
    "Lets Upgrade",
    "JavaScript",
    "Programming",
    "Nice",
    "Costa Rica",
    "Maricela"];

let randomDiv = document.getElementById("myRandomDiv");

document.getElementById("myButton").addEventListener("click", function () {
    let randomIndex = Math.ceil((Math.random() * 10) % randomStrings.length - 1);
    newText = randomStrings[randomIndex];
    randomDiv.innerHTML = newText;
});
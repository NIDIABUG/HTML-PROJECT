// A function that display the user input using element id.
// 1. it takes the id of the element <input>.
// 2. then pass the value to the specified element by id.
function displayInput() {
    var userInput = document.getElementById("userInput").value;
    document.getElementById("output").innerHTML = userInput;
}
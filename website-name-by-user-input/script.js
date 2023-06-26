// A function that convert the user input using element id to website name.
// 1. it takes the id of the element <input>.
// 2. then pass the value to the specified element by id.
function convertInput() {
    var userInput = "https://" + document.getElementById("userInput").value + ".com";
    document.getElementById("output").href = userInput;
}
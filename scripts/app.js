//  select buttons in html file
const addButton = document.querySelector(".submit");
const clearButton = document.querySelector(".clear");

//  variable to select unordered list
const unOrderedList = document.querySelector(".list");

//  function to create new todo text and put into unordered list
addButton.addEventListener('click', function() {
    //  variables for creating todo list
    //  select user text input
    const textInput = document.querySelector(".input").value;
    //  create new html list node
    const list = document.createElement("li");
    //  get user input and turn into a node
    const input = document.createTextNode(textInput);
    //  use list node and user input node to create todo list item
    list.appendChild(input);

    //  variable to create delete button for each TODO list item
    //  create new html button node
    const delElement = document.createElement("button");
    //  variable for button text
    const delButton = document.createTextNode("Delete");
    //  use button node and button text to create new delete button
    delElement.appendChild(delButton);

    //  check for user blank text value
    if (textInput === "") {
        alert("Must write something here!");
    } else {
        //  put delete button in first position of unordered list
        unOrderedList.insertBefore(delElement, unOrderedList.children[0]);
        //  put todo item into first position of html unordered list
        unOrderedList.insertBefore(list, unOrderedList.children[0]);
    }
    //  reset text input box for user
    document.querySelector(".input").value = "";

    //  function to delete individual TODO list items
    delElement.addEventListener('click', function() {
        unOrderedList.removeChild(delElement);
        unOrderedList.removeChild(list);
    })
})

//  function to clear html todo list
clearButton.addEventListener('click', function() {
    while (unOrderedList.hasChildNodes()) {
        unOrderedList.removeChild(unOrderedList.firstChild);
    }
})

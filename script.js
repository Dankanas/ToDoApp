
const itemArray = [];
const checkTest = [];

const addItem = () => {  // Imetu nauja list item + priskiriu jam false verte (ale tipo unchecked)
    let inputItem = document.getElementById('inputName').value; 
    checkTester(); // <- patikrinu pries tai buvusius list itemu checkboxus
    itemArray.push(inputItem);
    checkTest.push(false);
    putElement();
    
     // <
}

const checkTester = () => { // <-- jei checkbox checked tai to elemento verte true , jei ne - false
    itemArray.forEach ((x, i) => {
        if (document.getElementById(`checkbox${i}`).checked) {
            checkTest[i] = true;}
        else{
            checkTest[i] = false;
            
        }
    })
}

const createElement = (idname, index, checked) => {
    return  `<label for="checkbox${index}">
    <div class="app_body_entry_outside">
        <div class="app_body_entry">
            <input type="checkbox" class="app_body_entry_checkbox" id="checkbox${index}" ${checked}>
            <div class="newCheckbox"></div>
            <span class="app_body_entry_name">${idname}</span>
            <button class="app_body_entry_delete" id="delete${index}" onclick="deleteElement(${index})"></button>
        </div> 
    </div></label>`  
    
}

const putElement = () => {
    appBody = document.getElementById('app_body');
    appBody.innerHTML = "";
    itemArray.forEach((x, i) => { 
        if (checkTest[i]) 
        {appBody.innerHTML += createElement(x, i, "checked")}
        else
        {appBody.innerHTML += createElement(x, i, "")}
    })
    
}

function deleteElement(param) {
    checkTester();
    itemArray.splice(param, 1);
    checkTest.splice(param, 1);
    putElement();
}

const inputItem2 = document.getElementById("inputName");
inputItem2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("addButton").click();
  }
});
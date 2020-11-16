
const itemArray = [];

const addItem = () => {  // <- 'Add' button funkcija
    const inputItem = document.getElementById('inputName'); 
    checkboxChecker(); 
    entryNameChecker();
    itemArray.push({
        itemName: inputItem.value,
        itemValue: false
    });
    putElement();
    inputItem.value = "" ;
    
     // <
}

const checkboxChecker = () => { // <- Pasiema saraso checkboxo vertes. Jei checked = true, jei ne = false.
    itemArray.forEach ((x, i) => {
        if (document.getElementById(`checkbox${i}`).checked) {
            itemArray[i].itemValue = true;}
        else{
            itemArray[i].itemValue = false;
            
        }
    })
}

const entryNameChecker = () => { // <- Pasiema saraso input vertes.
    itemArray.forEach((x, i) => {x.itemName = document.getElementById(`app_body_entry_name${i}`).value});
}

const createElement = (idname, index, checked) => {  // <- Sukuria HTML elementa
    return  `<label for="checkbox${index}">
    <div class="app_body_entry_outside">
        <div class="app_body_entry">
            <input type="checkbox" class="app_body_entry_checkbox" id="checkbox${index}" ${checked}>
            <div class="newCheckbox"></div>
            <input type="text" class="app_body_entry_name" value="${idname}" id="app_body_entry_name${index}">
            <button class="app_body_entry_delete" id="delete${index}" onclick="deleteElement(${index})"></button>
        </div> 
    </div></label>`  
    
}

const putElement = () => {
    appBody = document.getElementById('app_body'); // Nauja HTML elementa ideda i HTML koda
    appBody.innerHTML = "";
    itemArray.forEach((x, i) => { 
        if (itemArray[i].itemValue) 
        {appBody.innerHTML += createElement(x.itemName, i, "checked")}
        else
        {appBody.innerHTML += createElement(x.itemName, i, "")}
    })
    
}

function deleteElement(param) { // 'Delete' button funkcija. Istrina eilute ir atnaujina sarasa.
    entryNameChecker();
    checkboxChecker();
    itemArray.splice(param, 1);
    putElement();
}

const inputItem2 = document.getElementById("inputName"); // Click 'Add' button with Enter
inputItem2.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { // 13 - Enter 'key'
    event.preventDefault();
    document.getElementById("addButton").click();
  }
});
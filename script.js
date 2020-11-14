
const itemArray = [];
let counter = 1;

const addItem = () => {
    const inputItem = document.getElementById('inputName').value;
    itemArray.push(inputItem);
    putElement();
}

const createElement = (idname, index) => {
    return  `<label for="checkbox${index}">
    <div class="app_body_entry_outside">
        <div class="app_body_entry">
            <input type="checkbox" class="app_body_entry_checkbox" id="checkbox${index}">
            <div class="newCheckbox"></div>
            <span class="app_body_entry_name">${idname}</span>
            <button class="app_body_entry_delete" id="delete${index}" onclick="deleteElement(${index})"></button>
        </div> 
    </div></label>`  
    
}

const putElement = () => {
    appBody = document.getElementById('app_body')
    appBody.innerHTML = "";
    itemArray.forEach((x, i) => {appBody.innerHTML += createElement(x, i)})
    
}

function deleteElement(param) {
    itemArray.splice(param, 1);
    putElement();
}

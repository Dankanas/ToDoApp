const itemArray = [];

const addItem = () => {
  // <- 'Add' button funkcija
  const inputItem = document.getElementById("inputName");
  checkboxChecker();
  entryNameChecker();
  itemArray.push({
    itemName: inputItem.value,
    itemValue: false,
  });
  putElement();
  inputItem.value = "";
  window.localStorage.setItem("Sarasas", JSON.stringify(itemArray));
};

const checkboxChecker = () => {
  // <- Pasiema saraso checkboxo vertes. Jei checked = true, jei ne = false.
  itemArray.forEach((x, i) => {
    if (document.getElementById(`checkbox${i}`).checked) {
      itemArray[i].itemValue = true;
    } else {
      itemArray[i].itemValue = false;
    }
  });
};

const entryNameChecker = () => {
  // <- Pasiema saraso input vertes.
  itemArray.forEach((x, i) => {
    x.itemName = document.getElementById(`entry_name${i}`).value;
    
  });
};

const editItem = (event, index) => {
  itemArray[index].itemName = event.target.value;  
  window.localStorage.setItem("Sarasas", JSON.stringify(itemArray));
}

const editCheckbox = (index) => {
    itemArray[index].itemValue = !itemArray[index].itemValue;
    window.localStorage.setItem("Sarasas", JSON.stringify(itemArray));
}

const createElement = (idname, index, checked) => {
  // <- Sukuria HTML elementa
  return `<label for="checkbox${index}">
    <div class="entry">
        <div class="entry_body">
            <input type="checkbox" onclick=editCheckbox(${index}) class="entry_checkbox--default" id="checkbox${index}" ${checked}>
            <div class="entry_checkbox"></div>
            <input onkeyup="editItem(event, ${index})" type="text" class="entry_name" value="${idname}" id="entry_name${index}">
            <button class="entry_delete" id="delete${index}" onclick="deleteElement(${index})"></button>
        </div>
    </div></label>`;
};

const putElement = () => {
  appBody = document.getElementById("app_body"); // Nauja HTML elementa ideda i HTML koda
  appBody.innerHTML = "";
  itemArray.forEach((x, i) => {
    if (itemArray[i].itemValue) {
      appBody.innerHTML += createElement(x.itemName, i, "checked");
    } else {
      appBody.innerHTML += createElement(x.itemName, i, "");
    }
  });
};

function deleteElement(param) {
  // 'Delete' button funkcija. Istrina eilute ir atnaujina sarasa.
  entryNameChecker();
  checkboxChecker();
  itemArray.splice(param, 1);
  putElement();
  window.localStorage.setItem("Sarasas", JSON.stringify(itemArray));
}

const loadList = () => {
  // Uzkrauna objekta is local storage
  const stringifiedObject = window.localStorage.getItem("Sarasas");
  const loadedObjectArray = JSON.parse(stringifiedObject);
  loadedObjectArray.forEach((x) => {
    itemArray.push(x);
  });
  putElement();
};

const inputItem2 = document.getElementById("inputName"); // Click 'Add' button with Enter
inputItem2.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    // 13 - Enter 'key'
    event.preventDefault();
    document.getElementById("addButton").click();
  }
});

loadList();

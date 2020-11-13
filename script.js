
const itemArray = [];
let counter = 1;
const pushButton = () => {
    const inputItem = document.getElementById('inputName').value;
    const appLabel = document.createElement('label');
    const appEntryDiv = document.createElement('div');
    const appEntryCheckbox = document.createElement('input');
    const appEntryName = document.createElement('span');
    const appEntryText = document.createTextNode(inputItem);  
    const appEntryDelete = document.createElement('button');

    appLabel.setAttribute("for", "app_body_entry_checkbox" + counter.toString());
    appEntryDiv.setAttribute("class", 'app_body_entry');
    appEntryDiv.setAttribute("id", "app_body_entry" + counter.toString());
    appEntryCheckbox.setAttribute("type", "checkbox");
    appEntryCheckbox.setAttribute("class", "app_body_entry_checkbox");
    appEntryCheckbox.setAttribute("id", "app_body_entry_checkbox" + counter.toString());
    appEntryName.setAttribute("class", "app_body_entry_name");
    appEntryDelete.setAttribute("class", "app_body_entry_delete");
    appEntryDelete.setAttribute("onclick", "deleteElement(app_body_entry" + counter.toString()+")");

    appEntryName.appendChild(appEntryText);
    appEntryDiv.appendChild(appEntryCheckbox);
    appEntryDiv.appendChild(appEntryName);
    appEntryDiv.appendChild(appEntryDelete);
    appLabel.appendChild(appEntryDiv);
    const placer = document.getElementById('app_body');
    placer.appendChild(appLabel);
    counter++;

}
function deleteElement(param) {
    param.remove();
}

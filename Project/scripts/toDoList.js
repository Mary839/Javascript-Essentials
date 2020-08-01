
/*
const button = document.querySelector('#btn');
const list = document.querySelector('#list');



button.onclick = function (){

    let item = document.querySelector
    ("#todo").value;
    let text = document.createTextNode(item);
    let listItem = document.createElement
    ('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();

    
    
}

*/

let row = 0;
function addText(){
    let input = document.getElementById('inputTask').value;
    if(input != "")
    {
    let node=document.createElement("p");
    let textnode=document.createTextNode(input);
    node.appendChild(textnode);
        node.setAttribute("id","contentP"+row);
    document.getElementById('addTask').appendChild(node);

    let removeTask = document.createElement('input');
    removeTask.setAttribute('type', 'button');
    removeTask.setAttribute("value", "Remove");
    removeTask.setAttribute("id", "removeButton");
    removeTask.setAttribute("onClick", "deleterow("+ row +");");

    node.appendChild(removeTask);
        row++;
    }
    else
    {
        alert("Please insert a value!");
    }

}
function deleterow(ID)
{
    document.getElementById('contentP'+ID).remove();
}




import Task from "./AddTask";
import {tasks} from "./removeItem";
import dynamicLI from "./dynamicUI";
import { deleteItem } from "./removeItem";



  
function listItems (task) {
    const list = document.querySelector('.list');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');

    const li = document.createElement('li');
    li.classList.add('li');

    const line = document.createElement('hr');
    line.classList.add('line');

    const bin = document.createElement('i');
    bin.setAttribute('class', 'fa-solid fa-trash');
    bin.classList.add('icon', 'hidden', 'remove');

    const ellipsis = document.createElement('i');
    ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    ellipsis.classList.add('icon2');


    const description = document.createElement('p');
    description.innerHTML = task.description;

    const inputParaSpan = document.createElement('span');
    inputParaSpan.classList.add('span');
    inputParaSpan.append(input, description, ellipsis, bin);

    li.append(inputParaSpan, line);

    list.append(li);
};

export default listItems;

export function newTask () {
    let inputField = document.querySelector('.input');
    inputField.addEventListener('keydown', (event) =>{
        if (event.key === 'Enter'){
            const inputValue = inputField.value;
            inputField.value = ''
            if (inputValue === ''){
                return false;
            }
            const task = new Task(inputValue, false, tasks.length + 1 );            
            listItems(task);                      
            tasks.push(task);            
            
            deleteItem()
            return localStorage.setItem('tasks', JSON.stringify(tasks)); 
                    
        };                     
    })
    
}

newTask()

tasks.forEach((element) => {
    listItems(element);
});







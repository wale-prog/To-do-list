import Task from "./AddTask";
import {deleteItem,tasks} from "./removeItem";

  
function listItems (task) {
    const list = document.querySelector('.list');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');

    const li = document.createElement('li');
    li.classList.add('li');

    const line = document.createElement('hr');
    line.classList.add('line');

    const ellipsis = document.createElement('i');
    ellipsis.setAttribute('class', 'fa-solid fa-trash');
    ellipsis.classList.add('remove');

    const description = document.createElement('p');
    description.innerHTML = task.description;

    const inputParaSpan = document.createElement('span');
    inputParaSpan.classList.add('span');
    inputParaSpan.append(input, description, ellipsis);

    li.append(inputParaSpan, line);

    list.append(li);
};

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
            deleteItem();              
            return localStorage.setItem('tasks', JSON.stringify(tasks));   
                    
        };  
                   
    })
    
}

newTask()

tasks.forEach((element) => {
    listItems(element);
});


export default listItems;




 export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function deleteItem(){
    const removebtn = document.querySelectorAll('.remove');
    removebtn.forEach((item) => {
        const itemContainer = document.querySelector('.list');
        
        item.addEventListener('click', (event) => {
            const clickedItem = event.target.parentNode.parentNode;

            itemContainer.removeChild(clickedItem);
            const removedItem = event.target.previousElementSibling.textContent;      
            //   let removedArry = tasks.filter((task) => 
            //     task.description === removedItem)
                
            // console.log(removedArry[0].index)
            // console.log(tasks)
            
            tasks = tasks.filter((task) => task.description !== removedItem);

            localStorage.setItem('tasks', JSON.stringify(tasks))
        })
        
    })
    
}


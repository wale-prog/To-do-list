export const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function deleteItem() {
  const removebtn = document.querySelectorAll('.icon');
  removebtn.forEach((item) => {
    const itemContainer = document.querySelector('.list');
    item.addEventListener('click', (event) => {
      const clickedItem = event.target.parentNode.parentNode;
      itemContainer.removeChild(clickedItem);
      const removedItem = event.target.previousElementSibling.previousElementSibling.textContent;

      const removedArry = tasks.filter((task) => task.description === removedItem);
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index > removedArry[0].index) {
          const newIndex = tasks[i].index - 1;
          tasks[i].index = newIndex;
        }
      }
      tasks.filter((task) => task.description !== removedItem);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}

deleteItem();

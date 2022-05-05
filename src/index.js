import './style.css';

const task = [
  {
    description: 'Draw out plans for the next day',
    completed: 'true',
    index: 1,
  },
  {
    description: 'Complete the Set-up with Webpack lesson ',
    completed: 'true',
    index: 2,
  },
  {
    description: 'Complete to Do list project',
    completed: 'false',
    index: 3,
  },
];

const heading = document.querySelector('.heading');
heading.classList.add('sample');

const listItems = () => {
  task.forEach((todo) => {
    const list = document.querySelector('.list');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');

    const li = document.createElement('li');
    li.classList.add('li');

    const line = document.createElement('hr');
    line.classList.add('line');

    const ellipsis = document.createElement('i');
    ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    ellipsis.classList.add('more');

    const description = document.createElement('p');
    description.innerHTML = todo.description;

    const inputParaSpan = document.createElement('span');
    inputParaSpan.classList.add('span');
    inputParaSpan.append(input, description, ellipsis);

    li.append(inputParaSpan, line);

    list.append(li);
  });
};

listItems();

/* eslint-disable import/extensions */
import './style.css';
import { newTask } from './modules/to-do-UI';
import { deleteItem } from './modules/removeItem';
import dynamicLI from './modules/dynamicUI';

const inputField = document.querySelector('.input');
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    dynamicLI();
    deleteItem();
  } else {
    return dynamicLI();
  }
});

newTask();
deleteItem();
dynamicLI();

import './style.css';
import {newTask} from './modules/to-do-UI';
import { deleteItem } from './modules/removeItem';
import dynamicLI from './modules/dynamicUI'


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

dynamicLI();
newTask(tasks);
deleteItem()



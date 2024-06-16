/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  const inbox = document.getElementById('inbox');\r\n  const today = document.getElementById('today');\r\n  const week = document.getElementById('week');\r\n  const addTaskButton = document.getElementById('add-task');\r\n  const taskForm = document.getElementById('task-form');\r\n  const saveTaskButton = document.getElementById('save-task');\r\n  const cancelTaskButton = document.getElementById('cancel-task');\r\n  const taskList = document.getElementById('task-list');\r\n\r\n  inbox.addEventListener('click', () => displayTasks('inbox'));\r\n  today.addEventListener('click', () => displayTasks('today'));\r\n  week.addEventListener('click', () => displayTasks('week'));\r\n  addTaskButton.addEventListener('click', () => showTaskForm());\r\n  saveTaskButton.addEventListener('click', () => addTask());\r\n  cancelTaskButton.addEventListener('click', () => hideTaskForm());\r\n\r\n  function displayTasks(category) {\r\n      // Fetch tasks from localStorage and display them in the taskList div\r\n      const tasks = getTasks(category);\r\n      taskList.innerHTML = tasks.map(task => `<div>${task.title} - ${task.dueDate}</div>`).join('');\r\n  }\r\n\r\n  function showTaskForm() {\r\n      taskForm.classList.remove('hidden');\r\n  }\r\n\r\n  function hideTaskForm() {\r\n      taskForm.classList.add('hidden');\r\n  }\r\n\r\n  function addTask() {\r\n      const title = document.getElementById('task-title').value;\r\n      const desc = document.getElementById('task-desc').value;\r\n      const date = document.getElementById('task-date').value;\r\n      const priority = document.getElementById('task-priority').value;\r\n\r\n      const task = { title, desc, date, priority };\r\n\r\n      saveTask(task, 'inbox'); // Default to saving in inbox\r\n      hideTaskForm();\r\n      displayTasks('inbox');\r\n  }\r\n\r\n  function saveTask(task, category) {\r\n      const tasks = getTasks(category);\r\n      tasks.push(task);\r\n      localStorage.setItem(category, JSON.stringify(tasks));\r\n  }\r\n\r\n  function getTasks(category) {\r\n      return JSON.parse(localStorage.getItem(category)) || [];\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
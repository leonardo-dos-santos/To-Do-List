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

eval("document.addEventListener(\"DOMContentLoaded\", () => {\r\n  const inbox = document.getElementById(\"inbox\");\r\n  const today = document.getElementById(\"today\");\r\n  const week = document.getElementById(\"week\");\r\n  const addTaskButton = document.getElementById(\"add-task\");\r\n  const taskForm = document.getElementById(\"task-form\");\r\n  const saveTaskButton = document.getElementById(\"save-task\");\r\n  const cancelTaskButton = document.getElementById(\"cancel-task\");\r\n  const taskList = document.getElementById(\"task-list\");\r\n  const addProjectButton = document.getElementById(\"add-project\");\r\n  const projectList = document.getElementById(\"project-list\");\r\n\r\n  let currentCategory = \"inbox\";\r\n\r\n  inbox.addEventListener(\"click\", () => displayTasks(\"inbox\"));\r\n  today.addEventListener(\"click\", () => displayTasks(\"today\"));\r\n  week.addEventListener(\"click\", () => displayTasks(\"week\"));\r\n  addTaskButton.addEventListener(\"click\", () => showTaskForm());\r\n  saveTaskButton.addEventListener(\"click\", () => addTask());\r\n  cancelTaskButton.addEventListener(\"click\", () => hideTaskForm());\r\n  addProjectButton.addEventListener(\"click\", () => addProject());\r\n\r\n  function displayTasks(category) {\r\n    currentCategory = category;\r\n    const tasks = getTasks(category);\r\n    taskList.innerHTML = tasks\r\n      .map((task) => `<div>${task.title} - ${task.date}</div>`)\r\n      .join(\"\");\r\n  }\r\n\r\n  function showTaskForm() {\r\n    taskForm.classList.toggle(\"hidden\"); // Toggle visibility\r\n  }\r\n\r\n  function hideTaskForm() {\r\n    taskForm.classList.add(\"hidden\");\r\n  }\r\n\r\n  addTaskButton.addEventListener(\"click\", () => showTaskForm());\r\ncancelTaskButton.addEventListener(\"click\", () => hideTaskForm());\r\n\r\nfunction showTaskForm() {\r\n  taskForm.classList.remove(\"hidden\");\r\n}\r\n\r\nfunction hideTaskForm() {\r\n  taskForm.classList.add(\"hidden\");\r\n}\r\n\r\n\r\n  function addTask() {\r\n    const title = document.getElementById(\"task-title\").value;\r\n    const desc = document.getElementById(\"task-desc\").value;\r\n    const date = document.getElementById(\"task-date\").value;\r\n    const priority = document.getElementById(\"task-priority\").value;\r\n\r\n    const task = { title, desc, date, priority };\r\n\r\n    saveTask(task, currentCategory);\r\n    hideTaskForm();\r\n    displayTasks(currentCategory);\r\n  }\r\n\r\n  function saveTask(task, category) {\r\n    const tasks = getTasks(category);\r\n    tasks.push(task);\r\n    localStorage.setItem(category, JSON.stringify(tasks));\r\n  }\r\n\r\n  function getTasks(category) {\r\n    return JSON.parse(localStorage.getItem(category)) || [];\r\n  }\r\n\r\n  function addProject() {\r\n    const projectName = prompt(\"Enter project name:\");\r\n    if (projectName) {\r\n      const projects = getProjects();\r\n      projects.push(projectName);\r\n      localStorage.setItem(\"projects\", JSON.stringify(projects));\r\n      displayProjects();\r\n    }\r\n  }\r\n\r\n  function displayProjects() {\r\n    const projects = getProjects();\r\n    projectList.innerHTML = projects\r\n      .map(\r\n        (project) => `\r\n            <div class=\"project-item\" onclick=\"displayTasks('${project}')\">\r\n                ${project}\r\n            </div>\r\n        `\r\n      )\r\n      .join(\"\");\r\n  }\r\n\r\n  function getProjects() {\r\n    return JSON.parse(localStorage.getItem(\"projects\")) || [];\r\n  }\r\n\r\n  window.displayTasks = displayTasks;\r\n\r\n  // Initialize display\r\n  displayProjects();\r\n  displayTasks(\"inbox\");\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
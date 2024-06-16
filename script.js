document.addEventListener('DOMContentLoaded', () => {
  const inbox = document.getElementById('inbox');
  const today = document.getElementById('today');
  const week = document.getElementById('week');
  const addTaskButton = document.getElementById('add-task');
  const taskForm = document.getElementById('task-form');
  const saveTaskButton = document.getElementById('save-task');
  const cancelTaskButton = document.getElementById('cancel-task');
  const taskList = document.getElementById('task-list');

  inbox.addEventListener('click', () => displayTasks('inbox'));
  today.addEventListener('click', () => displayTasks('today'));
  week.addEventListener('click', () => displayTasks('week'));
  addTaskButton.addEventListener('click', () => showTaskForm());
  saveTaskButton.addEventListener('click', () => addTask());
  cancelTaskButton.addEventListener('click', () => hideTaskForm());

  function displayTasks(category) {
      // Fetch tasks from localStorage and display them in the taskList div
      const tasks = getTasks(category);
      taskList.innerHTML = tasks.map(task => `<div>${task.title} - ${task.dueDate}</div>`).join('');
  }

  function showTaskForm() {
      taskForm.classList.remove('hidden');
  }

  function hideTaskForm() {
      taskForm.classList.add('hidden');
  }

  function addTask() {
      const title = document.getElementById('task-title').value;
      const desc = document.getElementById('task-desc').value;
      const date = document.getElementById('task-date').value;
      const priority = document.getElementById('task-priority').value;

      const task = { title, desc, date, priority };

      saveTask(task, 'inbox'); // Default to saving in inbox
      hideTaskForm();
      displayTasks('inbox');
  }

  function saveTask(task, category) {
      const tasks = getTasks(category);
      tasks.push(task);
      localStorage.setItem(category, JSON.stringify(tasks));
  }

  function getTasks(category) {
      return JSON.parse(localStorage.getItem(category)) || [];
  }
});

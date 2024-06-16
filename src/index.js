document.addEventListener('DOMContentLoaded', () => {
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    const week = document.getElementById('week');
    const addTaskButton = document.getElementById('add-task');
    const taskForm = document.getElementById('task-form');
    const saveTaskButton = document.getElementById('save-task');
    const cancelTaskButton = document.getElementById('cancel-task');
    const taskList = document.getElementById('task-list');
    const addProjectButton = document.getElementById('add-project');
    const projectList = document.getElementById('project-list');

    let currentCategory = 'inbox';

    inbox.addEventListener('click', () => displayTasks('inbox'));
    today.addEventListener('click', () => displayTasks('today'));
    week.addEventListener('click', () => displayTasks('week'));
    addTaskButton.addEventListener('click', () => showTaskForm());
    saveTaskButton.addEventListener('click', () => addTask());
    cancelTaskButton.addEventListener('click', () => hideTaskForm());
    addProjectButton.addEventListener('click', () => addProject());

    function displayTasks(category) {
        currentCategory = category;
        const tasks = getTasks(category);
        taskList.innerHTML = tasks.map(task => `<div>${task.title} - ${task.date}</div>`).join('');
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

        saveTask(task, currentCategory);
        hideTaskForm();
        displayTasks(currentCategory);
    }

    function saveTask(task, category) {
        const tasks = getTasks(category);
        tasks.push(task);
        localStorage.setItem(category, JSON.stringify(tasks));
    }

    function getTasks(category) {
        return JSON.parse(localStorage.getItem(category)) || [];
    }

    function addProject() {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            const projects = getProjects();
            projects.push(projectName);
            localStorage.setItem('projects', JSON.stringify(projects));
            displayProjects();
        }
    }

    function displayProjects() {
        const projects = getProjects();
        projectList.innerHTML = projects.map(project => `
            <div class="project-item" onclick="displayTasks('${project}')">
                ${project}
            </div>
        `).join('');
    }

    function getProjects() {
        return JSON.parse(localStorage.getItem('projects')) || [];
    }

    window.displayTasks = displayTasks;

    // Initialize display
    displayProjects();
    displayTasks('inbox');
});

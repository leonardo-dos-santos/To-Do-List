document.addEventListener('DOMContentLoaded', () => {
    const inbox = document.getElementById('inbox');
    const today = document.getElementById('today');
    const week = document.getElementById('week');
    const addTaskButton = document.getElementById('add-task');
    const taskForm = document.getElementById('task-form');
    const saveTaskButton = document.getElementById('save-task');
    const cancelTaskButton = document.getElementById('cancel-task');
    const taskList = document.getElementById('task-list');

    let currentCategory = 'inbox';

    inbox.addEventListener('click', () => displayTasks('inbox'));
    today.addEventListener('click', () => displayTasks('today'));
    week.addEventListener('click', () => displayTasks('week'));
    addTaskButton.addEventListener('click', () => showTaskForm());
    saveTaskButton.addEventListener('click', () => addTask());
    cancelTaskButton.addEventListener('click', () => hideTaskForm());

    displayTasks(currentCategory);

    function displayTasks(category) {
        currentCategory = category;
        const tasks = getTasks(category);
        taskList.innerHTML = tasks.map((task, index) => `
        <div>
            <span>${task.title} - ${task.date}</span>
            <button class="deleteTask" onclick="deleteTask(${index})">Delete</button>
        </div>
        `).join('');
    }

    window.deleteTask = function(index) {
        const tasks = getTasks(currentCategory);
        tasks.splice(index, 1); // Remove a tarefa do array
        localStorage.setItem(currentCategory, JSON.stringify(tasks)); // Atualiza o armazenamento local
        displayTasks(currentCategory); // Atualiza a exibição das tarefas
    };

    function showTaskForm() {
        taskForm.style.display = 'flex';
        taskForm.style.flexDirection = 'column';
        taskForm.style.marginTop = '1em';
    }
    
    function hideTaskForm() {
        taskForm.style.display = 'none';
    }

    function addTask() {
        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const date = document.getElementById('task-date').value;
        const priority = document.getElementById('task-priority').value;
        
        // Verificar se algum campo obrigatório está vazio
        if (title.trim() === '') {
            document.getElementById('title-error').textContent = 'Please enter a title';
            return; // Sair da função se o título estiver vazio
        } else {
            document.getElementById('title-error').textContent = ''; // Limpar mensagem de erro
        }

        if (date.trim() === '') {
            document.getElementById('date-error').textContent = 'Please enter a date';
            return; // Sair da função se a data estiver vazia
        } else {
            document.getElementById('date-error').textContent = ''; // Limpar mensagem de erro
        }

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

    window.displayTasks = displayTasks;

    // Initialize display
    displayProjects();
    displayTasks('inbox');
});

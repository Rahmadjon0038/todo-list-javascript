const input = document.getElementById('input');
const btn = document.getElementById('btn');
const tasks = document.getElementById('tasks');
const dark = document.querySelector('.dark')
const darkMode = document.getElementById('darkMode')
const lighMode = document.getElementById('lighMode')
const wrapper  = document.querySelector('.wrapper')
const title  = document.querySelector('.title')
const darks1  = document.querySelector('.darks1')
const darks2  = document.querySelector('.darks2')


let allTasks = JSON.parse(localStorage.getItem('alltasks')) || [];
const getdata = () => {
    let name = input.value.trim();
    if (name) {
        let id = allTasks.length ? Math.max(...allTasks.map(task => task.id)) + 1 : 1;
        allTasks.push({ id, name });
        localStorage.setItem('alltasks', JSON.stringify(allTasks));
    }
    get();
};

btn.addEventListener('click', () => {
    getdata();
    input.value = '';
});

document.addEventListener('keydown', (event) => {
    if (input.value && event.key == 'Enter') {
        getdata();
        input.value = '';
    }
});
function get() {
    tasks.innerHTML = ''; 
    allTasks.forEach((item) => {
        tasks.innerHTML += `
        <div id="task">
            <p>${item.id}. ${item.name}</p>
            <button onclick="deleteTask(${item.id})" class='delbtn'>Delete</button>
        </div>
        `;
    });
}

function deleteTask(id) {
    allTasks = allTasks.filter(task => task.id !== id);
    localStorage.setItem('alltasks', JSON.stringify(allTasks));
    get();
}
get();

darkMode.addEventListener('click', () => {
    dark.classList.add('dark-mode')
    title.style.color = 'white'
    tasks.style.color = 'white'
    darks1.style.color = 'white'
    darks2.style.color = 'white'
    
})
lighMode.addEventListener('click', () => {
    dark.classList.remove('dark-mode')
    tasks.style.color = 'black'
    title.style.color = 'black'
     darks1.style.color = 'black'
    darks2.style.color = 'black'
})



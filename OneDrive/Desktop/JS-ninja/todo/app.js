const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const deleteIcon = document.querySelector('.delete');
const search = document.querySelector('.search input');

const createTemplate = todo =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

   
}

//add todo
addForm.addEventListener('submit', e =>{
    e.preventDefault();

    const todo = addForm.add.value.trim();
    
    if(todo.length){
        createTemplate(todo);
        addForm.reset();
    }
});

//delete todo

list.addEventListener('click', e =>{
    console.log(e.target.parentElement)
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filteredTodos = (term) =>{
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
    
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));  
};

//keyup
search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();

    filteredTodos(term);
});

//references to html elements
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


//add todos function
const generateTemplate = todo => {
	const html = `
		<li class="list-group-item d-flex justify-content-between align-items-center">
			<span>${todo}</span>
			<i class="far fa-trash-alt delete"></i>
		</li>
		`;
	list.innerHTML += html;
};

//submit event for adding todos
addForm.addEventListener('submit', e => {
	e.preventDefault();
	const todo = addForm.add.value.trim(); 
	if(todo.length){
		generateTemplate(todo);
		addForm.reset();
	}
});

//delete todos
list.addEventListener('click', e => {
	if(e.target.classList.contains('delete')){
		e.target.parentElement.remove();
	}
});

//Todo list filtering function
const filterTodos = searchTerm => {
	Array.from(list.children)
	.filter((todo) => !todo.textContent.toLowerCase().includes(searchTerm))
	.forEach((todo) => todo.classList.add('filtered'));

	Array.from(list.children)
	.filter((todo) => todo.textContent.toLowerCase().includes(searchTerm))
	.forEach((todo) => todo.classList.remove('filtered'));
};


//search functionality('keyup' event)
search.addEventListener('keyup', () => {
	const searchTerm = search.value.trim().toLowerCase();
	filterTodos(searchTerm);
});













//NOTES
// use '!important' keyword to a css value to make sure that css value overwrites all other styling
//HTMLCollections cannot use array methods like forEach(), filter(), map(), sort(), reduce(), find()
//in order to use array methods on HTMLCollections, first convert it to an array using Array.from(HTMLCollection);
//.children property returns all the html children of an element(it is an HTMLCollection). Now, note that it only returns the children and not grand-children or great-grand-children etc.
//use the .contains() method to search for whether an item or value is in a list or array. Use the .includes() method to search
//for whether a value is in a string or not.
//'submit event occurs not only when a 'submit' button in a form is clicked, but also when a user hits the enter key on the keyboard
// .trim() method works on a string to remove all whitespaces before and after the string
//input elements or fields don't have textContent/innerText/innerHTML, they have the 'value' property instead.
//.reset() method works on forms to reset or clear all of its input fields.
//take note of the 'keyup' event. You can use it to achieve 'real-time' processing, for example, inside a search input field,
//as the user types, the data gets filtered with every key entered.
//In some situations, you can write functions not inside the area or scope their logic is required but rather outside that scope, making it global
//such that they become 'reusable' and can be used or called in other places when need be.

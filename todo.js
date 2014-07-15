var todoForm = document.getElementById("todoForm")   //gets whole form 
var todoInput = document.getElementById("todoInput") // grabs input 
var submit = document.getElementById("submit");   //grabs submit field 






todoForm.onsubmit = function(){
	event.preventDefault();
	console.log("HI")
	var todoList = document.getElementById('todoList');   //grabs to do list div 
	// var newListItem = document.getElementById('todoInput') //grabs user input 
	event.preventDefault();
	var newListBullet = document.createElement('li');   // //adds new list item, how come it isn't printing the bullets points?
	var newTextNode = document.createTextNode(todoInput.value);  //creates text node out of input 
	var newRemoveButton = document.createElement('button') //adds a remove button 

	newRemoveButton.innerHTML="x"

	todoList.appendChild(newListBullet);
	newListBullet.appendChild(newTextNode);
	newListBullet.appendChild(newRemoveButton);

	todoInput.value = ""  //this clears out the input field 

	newRemoveButton.onclick= function(){
		newListBullet.removeChild(newRemoveButton);
		newListBullet.removeChild(newTextNode);
		todoList.removeChild(newListBullet)
	}
}



//tried using this to help with bullet issues in addition to setting todoList as a div 
// newRemoveButton.innerHTML="x"
// 	todoList.appendChild(ulList);
// 	//ulList.appendChild(newListBullet)       //not sure if actually printing a list... when you add this comment back it creates the same spacing issues as if the todoList was a ul
// 	ulList.appendChild(newTextNode);
// 	ulList.appendChild(newRemoveButton);
window.addEventListener('load', () => {
    $( "#form" );
    $( "#title" );
    $( "#tasks" );
    
   form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const formTitle = title.value;
    
    if(!formTitle){
        alert("please fill out the title");
        return;
    }
    const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = $("#tasks").prepend('<div class="task"><div class="content"><input type="text" class="text" value="my task"/></div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>');


     
   });
   

});
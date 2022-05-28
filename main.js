window.addEventListener('load', () => {
 
    
   form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const formTitle = title.value;
    
    if(!formTitle){
        alert("please fill out the title");
        return;
    }
    

		const task_content_el = $("#tasks").prepend('<div class="task"><div class="content"><input type="text" class="text" value="my task" readonly></div><div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>');


        const edit = document.querySelector(".edit");
        const input = document.querySelector(".text");

        edit.addEventListener('click', (e) => {
			if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "Save";
				input.removeAttribute("readonly");
				input.focus();
			} else {
				edit.innerText = "Edit";
				input.setAttribute("readonly", "readonly");
			}
		});
        
 
   

});
})
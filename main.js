window.addEventListener('load', () => {
 
    
   form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const formTitle = title.value;
    const formDescription = description.value;
    
    if(!formTitle){
        alert("please fill out the title");
        return;
    }
    

		$("#tasks").append('<div class="task"> </div>');
        $(".task").append('<div class="content"></div>');
        $(".content").append('<input type="text" class="title-text" value="my task" readonly>');
        $(".content").append('<input type="text" class="description" value="my task" readonly>');
        $(".content").append('<div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>');
        
        
        $('.title-text').val(formTitle);
        $('.description').val(formDescription);

        

        

        const edit = document.querySelector(".edit");
        const inputTitle = document.querySelector(".title-text");
        const inputDescription = document.querySelector(".description");

        edit.addEventListener('click', (e) => {
			if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "Save";
				inputTitle.removeAttribute("readonly");
				inputTitle.focus();
                inputDescription.removeAttribute("readonly");
				inputDescription.focus();
			} else {
				edit.innerText = "Edit";
				input.setAttribute("readonly", "readonly");
			}
		});
        
 
   

});
})
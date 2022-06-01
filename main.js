$(document).ready(function(){
   
    
    
    $('#form').submit(function(event){
       event.preventDefault();
       
       var titleList = $('#title').val();
       var descriptionList = $('#description').val();
       
       if (titleList != ''){
            $("#tasks").append('<div class="task"> <div class="content"><input type="text" class="title-text" value='+titleList+'  readonly><input type="text" class="description" value='+descriptionList+'  readonly> <div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>');

           localStorage.setItem("listItems", $('#tasks').html());

           $('#title').val("");
           $('#description').val('');
       }
   }); 
    
    
    
 /* const formTitle = title.value;
    const formDescription = description.value;
    
    if(!formTitle){
        alert("please fill out the title");
        return;
    }
    else{
       
        $('.title-text').val(formTitle);
        $('.description').val(formDescription);
    }
        
        const edit = document.querySelector(".edit");
        const inputTitle = document.querySelector(".title-text");
        const inputDescription = document.querySelector(".description");
        const deleteTask = document.querySelector(".delete");
        edit.addEventListener('click', (e) => {
			if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "Save";
				inputTitle.removeAttribute("readonly");
				inputTitle.focus();
                inputDescription.removeAttribute("readonly");
			} else {
				edit.innerText = "Edit";
				inputTitle.setAttribute("readonly", "readonly");
				inputDescription.setAttribute("readonly", "readonly");
			}
		});
        $(".task").on('click', '.delete', function() {
			$(".task").fadeOut(200);
        });
 
   
});
})
*/
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /* $(window).on("load",function(){
        var count =0;
        $(".addtask").click(function() {
            var titleList = $("#title").val();
            var descriptionList = $('#description').val();
            
            
            if (titleList != ''){
                $("#tasks").append('<div class="task"> <div class="content"><input type="text" class="title-text" value='+titleList+' readonly><input type="text" class="description" value='+descriptionList+' readonly> <div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>');
                
            }
            $('#title').val('');
            $('#description').val('');
            })
        $(document).on('click', '.delete', function() {
            $(".content").remove();
        });
    })
    

    /* const formTitle = title.value;
    const formDescription = description.value;
    
    if(!formTitle){
        alert("please fill out the title");
        return;
    }
    else{
       
        $('.title-text').val(formTitle);
        $('.description').val(formDescription);
    }

        
        const edit = document.querySelector(".edit");
        const inputTitle = document.querySelector(".title-text");
        const inputDescription = document.querySelector(".description");
        const deleteTask = document.querySelector(".delete");

        edit.addEventListener('click', (e) => {
			if (edit.innerText.toLowerCase() == "edit") {
				edit.innerText = "Save";
				inputTitle.removeAttribute("readonly");
				inputTitle.focus();
                inputDescription.removeAttribute("readonly");
			} else {
				edit.innerText = "Edit";
				inputTitle.setAttribute("readonly", "readonly");
				inputDescription.setAttribute("readonly", "readonly");
			}
		});

        $(".task").on('click', '.delete', function() {
			$(".task").fadeOut(200);
        });
 
   

});
})
*/
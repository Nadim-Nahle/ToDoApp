$(window).on("load",function(){
   
    $('#tasks').html(localStorage.getItem("tasks"));
    
    $('#form').submit(function(event){
       event.preventDefault();
       
       var titleList = $('#title').val();
       var descriptionList = $('#description').val();
       
       if (titleList != ''){
            $("#tasks").append('<div class="task"> <div class="content"><input type="text" class="title-text" value='+titleList+'  readonly><input type="text" class="description" value='+descriptionList+'  readonly> <div class="actions"><button class="edit" value="0">Edit</button><button class="delete">Delete</button></div></div>');

           localStorage.setItem("tasks", $('#tasks').html());

           $('#title').val("");
           $('#description').val('');
       }
   }); 
    
   //the delete action
    $(document).on('click', '.delete', function(){
        $(this).parent().parent().fadeOut('slow', function(){
            $(this).remove();
            localStorage.setItem("tasks", $('#tasks').html());
        });
    });
    const edit = document.querySelector(".edit");
    $('.edit').click(function(event){
        if( edit.innerText == "Edit" ){
            
            $('.title-text').attr('readonly', false);
            $('.description').attr('readonly', false);
            $('.edit').html("save");
            localStorage.setItem("tasks", $('#tasks').html());
            
        }
        else {
            $('.edit').html("Edit");
            $('.title-text').attr('readonly', true);
            $('.description').attr('readonly', true);
            localStorage.setItem("tasks", $('#tasks').html());
        }
        
        localStorage.setItem("tasks", $('#tasks').html());
    })

})   
    

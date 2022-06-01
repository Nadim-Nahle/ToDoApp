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
    
   $(document).on('click', '.delete', function(){
    $(this).parent().parent().fadeOut('slow', function(){
        $(this).remove();
        localStorage.setItem("tasks", $('#tasks').html());
    });
});


})   
    

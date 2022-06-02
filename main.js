$(window).on("load",function(){
   
    $('#tasks').html(localStorage.getItem("tasks"));
    
    $('#form').submit(function(event){
       event.preventDefault();  
       var titleList = $('#title').val();
       var descriptionList = $('#description').val();
       var pointList = $('#point').val();
       var dateList = new Date($.now());

       

       if (titleList != '' && descriptionList !='' && pointList != ''){
            $("#tasks").append('<div class="task"> <div class="content"><input type="text" class="title-text" value='+titleList+'  readonly><input type="text" class="description" value='+descriptionList+'  readonly> <div class="point"><div class="points"><input type="text" class="point-text" value="point ='+pointList+'"  readonly></div><div class="dates">'+dateList+'</div><div class="actions"><button class="edit" value="0">Edit</button><button class="delete">Delete</button><button class="finish">Finish</button></div></div><hr>');
           localStorage.setItem("tasks", $('#tasks').html());
           

           $('#title').val("");
           $('#description').val('');
       }
       else{
           alert('please fill all the fields');
       }
       
   }); 
    
   //the delete action
    $(document).on('click', '.delete', function(){
      //  $(this).parent().parent().parent().fadeOut('slow', function(){
          $(this).closest('.task').fadeOut('slow', function(){
            $(this).remove();
            localStorage.setItem("tasks", $('#tasks').html());
        });
    });

    //the edit action
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


    $(document).on('click', '.finish', function(){
        $(this).closest('.task' ).addClass("grey");
        localStorage.setItem("tasks", $('#tasks').html());
                  
    });

    $(document).on('click', '.sort', function(){
        $("#tasks").sortable();
    })
})   
    

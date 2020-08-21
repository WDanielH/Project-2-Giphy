
document.addEventListener('DOMContentLoaded', function () {
    
    $("#submit").click(()=>{
      $("#results").empty();
     let query =  $("#search").val() //to do - validate
     let quantity = $("#quantity").val() //to do min and prefill
          
     var xhr = $.get('http://api.giphy.com/v1/gifs/search?q="'+query+'"&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit="'+quantity+'"&rating=pg');
    xhr.done(function(data) {
   
      console.log(data.data[0].images.original.url);
    for(i=0;i<quantity;i++){
        $("#results").append('<center><img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy"></center>')
    }
    
    
    })
})
})

// Needs to be done: - title bar, formatting, some quality of life items, ie clearing old gifs 
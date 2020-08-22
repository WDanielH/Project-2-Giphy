
document.addEventListener('DOMContentLoaded', function () {
    
    $("#submit").click(()=>{
      $("#results").empty();
      $("#resultsM").empty();
      $("#resultsR").empty();
     let query =  $("#search").val() //to do - validate
     let quantity = $("#quantity").val() //to do min and prefill
          
     var xhr = $.get('http://api.giphy.com/v1/gifs/search?q="'+query+'"&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit="'+quantity+'"&rating=pg');
    xhr.done(function(data) {
   
      console.log(data.data[0].images.original.url);
    for(i=0;i<quantity;i=i+1){
        
        //$("#results").append('<img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy">')
        //$("#results").append('<div class="grid-item"><img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy"></div>')
        $("#resultsL").append('<div class="grid-item">*</div>')
        $("#resultsM").append('<div class="grid-item">*</div>')
        $("#resultsR").append('<div class="grid-item">*</div>')
      }
   
   


      

    
    
    
    })
})
})

// Needs to be done: - title bar, formatting, some quality of life items, ie clearing old gifs 
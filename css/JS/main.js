
document.addEventListener('DOMContentLoaded', function () {
    
    $("#submit").click(()=>{
      $("#resultsL").empty();
      $("#resultsM").empty();
      $("#resultsR").empty();
     let query =  $("#search").val() //to do - validate
     let quantity = $("#quantity").val() //to do min and prefill
          
     var xhr = $.get('http://api.giphy.com/v1/gifs/search?q="'+query+'"&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit="'+quantity+'"&rating=pg');
    xhr.done(function(data) {
   
      console.log(data.data[0].images.original.url);
    for(i=0;i<quantity;i=i+3){
        //$("#resultsL").append('<img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy">')
        $("#resultsL").append('<div class="grid-item"><center><img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy"></center></div>')
      }
      for(i=1;i<quantity;i=i+3){
        //$("#resultsM").append('<img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy">')
        $("#resultsM").append('<div class="grid-item"><center><img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy"></center></div>')
      }
      for(i=2;i<quantity;i=i+3){
        //$("#resultsR").append('<img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy">')
        $("#resultsR").append('<div class="grid-item"><center><img src = "'+data.data[i].images.original.url+'"  title="GIF via Giphy"></center></div>')
      }
   
   


      

    
    
    
    })
})
})

// Needs to be done: - hamburger
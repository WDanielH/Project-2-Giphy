
document.addEventListener('DOMContentLoaded', function () {
    
    $("#submit").click(()=>{
      $('img').remove()
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
   
        $("#resultsL").append('<div class="grid-item">')
        $("#resultsM").append('<div class="grid-item"><center><img src = "Assets/PoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif"</center></div>')
        //$("#resultsM").append('<div class="grid-item">')
        $("#resultsR").append('<div class="grid-item">')

        //<img src = "Assets\PoweredBy_200_Horizontal_Light-Backgrounds_With_Logo.gif"
        //alt = "Powered by GIPHY" />
    
    })
})
})

// Needs to be done: - hamburger
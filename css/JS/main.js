


$(document).ready(()=>{
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit=1");
    xhr.done(function(data) {
   
    console.log("success got data", data);

    var url = 'https://avatarfiles.alphacoders.com/822/82242.png';
    //var url = 'data.data.images.original.url';
    $(document).ready(function() {
      var image = new Image();
      image.src = url;
      $('#container').append(image);
    });


//document.getElementById("test").src=data.data.images.original.url

   


});
})
    
    



/*
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G";
var query = "&q=ryan+gosling";
var qty = "&limit=1";

function setup(){
noCanvas();
var url = api + apiKey + query;
loadJSON(url, gotData);
}

function gotData(giphy){
   createImg(giphy.data[0].images.original.url)
}
/*


$(document).ready(()=>{
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit=1");
    xhr.done(function(data) {
    
    console.log("success got data", data);


   


});
    
    
    
})
    */
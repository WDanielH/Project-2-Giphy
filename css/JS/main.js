


document.addEventListener('DOMContentLoaded', function () {
    
    $("#submit").click(()=>{
     let query =  $("#search").val()
     let quantity = $("#quantity").val()
     //alert(q)  
    
    
        request = new XMLHttpRequest;
	    request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&rating=pg&tag='+query, true);
	
	    request.onload = function() {
		    if (request.status >= 200 && request.status < 400){
			    data = JSON.parse(request.responseText).data.image_url;
			    console.log(data);
            //document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
                $("body").append('<center><img src = "'+data+'"  title="GIF via Giphy"></center>')
            } 
            else {
			    console.log('reached giphy, but API returned an error');
		    }
        }
   

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();

    });

    //q = "ryan gosling"; // search query
	
	
});



/*


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
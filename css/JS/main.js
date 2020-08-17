$(document).ready(()=>{
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit=5");
    xhr.done(function(data) { console.log("success got data", data); });
    
    
    })
    
 
    
    //Basic code from GIPHY that should make a search for Ryan Gosling
    // my api key yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G
    
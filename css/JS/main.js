$(document).ready(()=>{
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit=5");
xhr.done((function(data)) { 
    
    console.log("success got data", data); });

    })

});

//currently working code
//$(document).ready(()=>{
   // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit=5");
   // xhr.done((function(data)) { 
        
        //console.log("success got data", data); });
    
       // })
    
   // });
    


//$("body").append("<img src=""/>")

})

/*
    $("#submit").click(()=>{
       let userInput = $("#search").val() 
       //alert(userInput) 
      
       $.ajax({
            //url:`http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&limit=5`
           url: https:`//api.giphy.com/v1/gifs/search?api_key=yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G&q=simpsons&limit=25&offset=0&rating=g&lang=en`    
        })
    .done((res)=>{
        let moves = res.Search;
        $.each(gifs, (i, e)=>{
            console.log("index",i, "element", e)
        }
        
        
    })
   
    })
*/
   




//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
//xhr.done(function(data) { console.log("success got data", data); });


//Basic code from GIPHY that should make a search for Ryan Gosling
// my api key yYK5jv0CIzQ0VMfIgccWfzvlsGY3yD3G

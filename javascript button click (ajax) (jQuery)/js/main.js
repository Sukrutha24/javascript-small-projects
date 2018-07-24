$('.pobierzDane').click(function(){
    
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
    function(data) {
      
             $('body').append('<p>userId ' + data.userId + '</p>');
             $('body').append('<p>userName ' + data.userName + '</p>');
             $('body').append('<p>userURL ' + data.userURL + '</p>');
      
             }  
    );
     
});
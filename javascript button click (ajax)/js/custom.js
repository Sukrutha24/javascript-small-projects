var poberzdane = document.getElementById("pobierzdane");

pobierzdane.addEventListener('click', function(e){
    e.preventDefault();
    
ajax("GET",
     "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
     function(data){
    console.log(data);
    
    var newElement1 = document.createElement( "p" );//Stworzenie paragrafów w których zagnieździmy dane
    var newElementContent1 = document.createTextNode("userId:" + data.userId); //stworzenie tekstu jaki ma wyświetlić się w paragrafie
    newElement1.appendChild(newElementContent1); // dodanie tekstu do elementu
    
    document.body.appendChild(newElement1); // dodanie elementu do paragrafu
    
    var newElement2 = document.createElement( "p" );
    var newElementContent2 = document.createTextNode("userName:" + data.userName);
    newElement2.appendChild(newElementContent2);
    
    document.body.appendChild(newElement2);
    
    var newElement3 = document.createElement( "p" );//Stworzenie paragrafów w których zagnieździmy dane
    var newElementContent3 = document.createTextNode("userURL:" + data.userURL);
    newElement3.appendChild(newElementContent3);
    
    document.body.appendChild(newElement3);
    
                   })
});

function ajax(method, url, callback) {
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                var returnData = httpRequest.responseText;
                
                var jsonObj = JSON.parse( returnData );
                
                callback(jsonObj);
                
                httpRequest = null;
            }
        }
    }
    httpRequest.send();
}
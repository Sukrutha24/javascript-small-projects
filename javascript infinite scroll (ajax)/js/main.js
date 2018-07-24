window.onscroll = function(e){
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
ajax("GET",
    "https://jsonplaceholder.typicode.com/users", pobierzDane)
    }
}

function pobierzDane(dane) {
    
    for(i = 0; i< dane.length; i++){
        
    var pId = document.createElement('p');
    var pName = document.createElement('p');
    var pWebsite= document.createElement('p');
    var pIdContent = document.createTextNode("id: " + dane[i].id);
    var pNameContent = document.createTextNode("name: " + dane[i].name);
    var pWebsiteContent = document.createTextNode("website: " + dane[i].website);
    
    pId.appendChild(pIdContent);
    pName.appendChild(pNameContent);
    pWebsite.appendChild(pWebsiteContent);
    
    document.body.appendChild(pId);
    document.body.appendChild(pName);
    document.body.appendChild(pWebsite);
        
    }
    
}

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



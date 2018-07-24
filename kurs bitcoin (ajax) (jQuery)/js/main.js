$(function(){
        $('.pobierzkursbitcoin').click(function(){
           
            $.getJSON("https://blockchain.info/pl/ticker", 
                    function(data) {
                $('#kupno').text(data.PLN.buy);
                $('#sprzedaz').text(data.PLN.sell);
            }  
                    );
            
            
            
        });
    })
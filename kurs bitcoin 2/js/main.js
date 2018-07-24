$(function () {
			var buyArrow = $('#buy-arrow');
			var sellArrow = $('#sell-arrow');
	
	
	
	function pobierzKursBitcoin(url) {
		$.getJSON(url, function (data) {

			var currentBuyPrice = parseFloat($('#buy').html());
			var currentSellPrice = parseFloat($('#sell').html());


			$('#buy').html(data.PLN.buy);
			$('#sell').html(data.PLN.sell);
			
			console.log(currentBuyPrice,currentSellPrice);

			if (currentBuyPrice > parseFloat(data.PLN.buy)) {
				buyArrow.css('color', 'red').removeAttr('class').addClass('fas fa-arrow-down');
			} else if (currentBuyPrice < parseFloat(data.PLN.buy)) {
				buyArrow.css('color', 'green').removeAttr('class').addClass('fas fa-arrow-up');
			} else {
				buyArrow.css('color', 'black').removeAttr('class').addClass('fas fa-minus-square');
			}

		});
	}
	
	pobierzKursBitcoin("https://blockchain.info/pl/ticker");


	$('.control-button').on('click', function () {
		pobierzKursBitcoin("https://blockchain.info/pl/ticker");

	});

});

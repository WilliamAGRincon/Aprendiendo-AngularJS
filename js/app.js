(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController',function(){
		this.products = gems;
	});

	var gems = [
	 {
		name: 'Ruby',
		price: 295.000,
		description: 'Gema hermosa',
		canPurchase: false,
		soldOut: false
	},
	{
		name: 'Diamante',
		price: 595.000,
		description: 'Gema hermosa para dama',
		canPurchase: false,
		soldOut: true
	}
	];
})();


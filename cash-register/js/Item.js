angular.module('Item.services', [])
	.factory('Item', function() {
		// creating object class for Items
		function Item(name, price) {
			this.name = name;
			this.price = price;
		}

		return Item;
	});

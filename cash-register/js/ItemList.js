angular.module('Item.services')
	.factory('ItemList', function (Item) {
		// object to contain list of items for sale
		var itemList = {};

		// add new items to itemList

		var addNewItem = function(name, price) {
			itemList[name] = new Item(name,price);
		};

		return {
			list: itemList,
			addNewItem: addNewItem
		};
	});

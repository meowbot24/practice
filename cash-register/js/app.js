angular.module('cashRegisterApp', [
	'Item.services', 'cashRegisterApp.services'
]);

function cashRegisterController($scope, Item, ItemList, cashRegister) {
	// add new items to ItemList for sale
	ItemList.addNewItem('milk', 2.00);
	ItemList.addNewItem('eggs', 3.00);
	ItemList.addNewItem('chocolate', 2.50);
	ItemList.addNewItem('kitty food', 20.00);
	ItemList.addNewItem('candy',4);
	ItemList.addNewItem('popcorn',5);

	// making use of cash register functions

	cashRegister.add('milk', 6); // add 6 milk to total

	cashRegister.add('kitty food', 2); // add 2 kitty food to total

	console.log('Your total is: ' + cashRegister.total); // log total

	cashRegister.voidItem('kitty food',1); // void 1 kitty food 

	cashRegister.add('milk', 4); // add 4 milk to total

	cashRegister.voidLastItem(); // void 4 milk

	cashRegister.add('kitty food', 2); // add 2 kitty food to total

	cashRegister.add('popcorn',4);
	cashRegister.add('candy',3);

	cashRegister.staffDiscount(20); // 20% staff discount

	console.log('Your total is: ' + cashRegister.total); // log total

	cashRegister.printBill(); // print all items and quantities added to total
}

angular
	.module('cashRegisterApp')
	.controller('cashRegisterController', cashRegisterController);

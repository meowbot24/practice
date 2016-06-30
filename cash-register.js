// DONE cash register keeps track of total
// DONE cash register adds item and quantity to total
// DONE cash register should be able to void items by last transaction
// DONE cash register should void items by particular item and quantity
// DONE staff discount

// DONE add new items

// print out receipt


var cashRegister = {
	total: 0,
	lastItemCost: 0,

	// add to cash register total, taking in name of item & quantity
	add: function(itemName, quantity) {

		// looping through itemList to match name to find price & add to total
		for (var x in itemList) {
			if (itemName === itemList[x]["name"]) {
				console.log(itemList[x]["name"]);
				this.lastItemCost = itemList[x]["price"] * quantity;
				this.total += this.lastItemCost;

				console.log("Cost of last items added: " + this.lastItemCost);
			};
		};
	},

	voidLastItem: function() {
		this.total -= this.lastItemCost;
		console.log("The last item has been voided, totalling: " + this.lastItemCost);
	},

	voidItem: function(itemName, quantity) {
		for (var x in itemList) {
			if (itemName === itemList[x]["name"]) {
				this.total -= ( itemList[x]["price"] * quantity );
				console.log(quantity + " " + itemList[x]["name"] + " has been voided.");
			};
		};
	},

	staffDiscount: function(discount) {
		this.total *= ((100 - discount)/100);
		console.log("Your staff discount of " + discount + "% has been applied.");
	}	

};

// creating object class for Items
function Item(name, price) {
	this.name = name;
	this.price = price;
};

// object containing all items available for sale
var itemList = {
	milk: new Item("milk", 2.00),
  	eggs: new Item("eggs", 3.00),
  	chocolate: new Item("chocolate", 2.50),
  	kittyFood: new Item("kitty food", 20.00)
};

// add new items to itemList

var addNewItem = function(name, price) {
	itemList[name] = new Item(name,price);
};

addNewItem("candy",4);
addNewItem("popcorn",5);

// // to view/log itemList
// for (var x in itemList) {
// 	console.log(itemList[x]["name"]);
// 	console.log(itemList[x]["price"]);
// };

cashRegister.add("milk",6); // add 6 milk to total

cashRegister.voidLastItem(); // void 6 milk

cashRegister.add("kitty food",2); // add 2 kitty food to total

cashRegister.voidItem("kitty food",1); // void 1 kitty food 

cashRegister.add("popcorn",4);
cashRegister.add("candy",3);

console.log("Your total is: " + cashRegister.total); // log total

cashRegister.staffDiscount(20); // 20% staff discount

console.log("Your total is: " + cashRegister.total); // log total


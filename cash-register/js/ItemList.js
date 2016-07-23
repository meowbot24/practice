// object containing all items available for sale
var itemList = {
  milk: new Item('milk', 2.00),
  eggs: new Item('eggs', 3.00),
  chocolate: new Item('chocolate', 2.50),
  kittyFood: new Item('kitty food', 20.00)
};

// add new items to itemList

var addNewItem = function(name, price) {
  itemList[name] = new Item(name,price);
};

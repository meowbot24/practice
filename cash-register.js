// DONE cash register keeps track of total
// DONE cash register adds item and quantity to total
// DONE cash register should be able to void items by last transaction
// DONE cash register should void items by particular item and quantity
// DONE staff discount

// DONE add new items

// DONE print out bill

// DONE modify void functions to account for bill

// DONE re-configure bill to have running totals for each type of item, rather than store each instance of the same item separately

// DONE fix void functions in respect to re-configured bill

// make an app out of this!
/*

v1
1. create index.html
2. add a form for inputs: item & quantity
3. outputs bill

- input for staff discount
- ability to add new items
- void last transaction
- void any item + quantity

*/

var cashRegister = {
  total: 0,
  lastItemCost: 0,
  lastItemName: "",
  lastItemQuantity: 0,
  bill: {},

  // add to cash register total, taking in name of item & quantity
  add: function(itemName, quantity) {

    // keep track of what the last item and quantity was for bill
    this.lastItemName = itemName;
    this.lastItemQuantity = quantity;

    // looping through itemList to match name to find price & add to total
    for (var x in itemList) {
      if (itemName === itemList[x].name) {
        console.log(itemList[x]["name"] + ", " + quantity);
        this.lastItemCost = itemList[x]["price"] * quantity;
        this.total += this.lastItemCost;

      }
    }

    // add item to bill

    // check if item exists on bill

    var billItemCheck = false;

    for (var m in this.bill) {
      if (itemName === this.bill[m]["name"]) {
        // console.log(itemName + " exists on the bill.");
        billItemCheck = true;
      } else {          
        // console.log(itemName + " does not exist on the bill");
      };

    };

    // console.log("Value of billItemCheck is: " + billItemCheck);


    // add item or quantity to bill depending on if item is already on bill
    
    if (billItemCheck) {
      // add quantity
      for (var n in this.bill) {
        if (itemName === this.bill[n]["name"]) {
          // console.log("Quantity of " + itemName + " is currently " + this.bill[n]["quantity"]);
          this.bill[n]["quantity"] += quantity;
          // console.log("Quantity of " + itemName + " is now " + this.bill[n]["quantity"]);
        };
      };

    } else {
      // add new object with item name and quantity
      this.bill[itemName] = {name: itemName, quantity: quantity};
      // console.log(itemName + " has now been added to the bill with quantity: " + this.bill[itemName]["quantity"]);
    };

  },

  voidLastItem: function() {
    this.total -= this.lastItemCost;

    // delete last scanned item & quantity from the bill

    for (var x in this.bill) {
      if (this.lastItemName === this.bill[x]["name"]) {
        if (this.bill[x]["quantity"] > this.lastItemQuantity) {
          this.bill[x]["quantity"] -= this.lastItemQuantity;
        } else {
          delete this.bill[x];
        };
      };
    };
  },

  voidItem: function(itemName, quantity) {
    for (var x in itemList) {
      if (itemName === itemList[x]["name"]) {
        this.total -= ( itemList[x]["price"] * quantity );
        console.log(quantity + " " + itemList[x]["name"] + " has been voided.");

        // remove from bill
        for (var y in this.bill) {
          if (itemList[x]["name"] === this.bill[y]["name"]) {

            // validate and/or subtract void quantity from bill
            if (quantity > this.bill[y]["quantity"]) {
              console.log("The void quantity exceeds the purchased quantity!");
            } else if (quantity === this.bill[y]["quantity"]) {
              console.log("This item has been removed from the bill: " + this.bill[y]["name"]);
              delete this.bill[y];
            } else {
              this.bill[y]["quantity"] -= quantity;
              console.log(quantity + " " + this.bill[y]["name"] + " has been removed from the bill.");
            };          

          };
        };
      };
    };
  },

  staffDiscount: function(discount) {
    this.total *= ((100 - discount)/100);
    console.log("Your staff discount of " + discount + "% has been applied.");
  },

  printBill: function() {
    console.log("Here is your bill:");
    for (var x in this.bill) {
      console.log("Item: " + this.bill[x]["name"] + " Quantity: " + this.bill[x]["quantity"]);
    };
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
//  console.log(itemList[x]["name"]);
//  console.log(itemList[x]["price"]);
// };


cashRegister.add("milk",6); // add 6 milk to total

cashRegister.add("kitty food",2); // add 2 kitty food to total

// cashRegister.voidItem("kitty food",1); // void 1 kitty food 

cashRegister.add("milk",4); // add 4 milk to total

cashRegister.voidLastItem(); // void 6 milk

cashRegister.add("kitty food",2); // add 2 kitty food to total

// cashRegister.add("popcorn",4);
// cashRegister.add("candy",3);

// console.log("Your total is: " + cashRegister.total); // log total

// cashRegister.staffDiscount(20); // 20% staff discount

cashRegister.voidItem("kitty food", 3);

console.log("Your total is: " + cashRegister.total); // log total

cashRegister.printBill(); // print all items and quantities added to total


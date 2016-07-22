var cashRegister = {
  total: 0,
  lastItemCost: 0,
  lastItemName: '',
  lastItemQuantity: 0,
  bill: {},

  // add to cash register total, taking in name of item & quantity
  add: function(itemName, quantity) {

    // keep track of what the last item and quantity was for bill
    this.lastItemName = itemName;
    this.lastItemQuantity = quantity;

    // looping through itemList to match name to find price & add to total
    for (var item in itemList) {
      if (itemName === itemList[item].name) {
        this.lastItemCost = itemList[item].price * quantity;
        this.total += this.lastItemCost;

      }
    }

    // add item to bill

    // check if item exists on bill

    var billItemCheck = false;

    for (var billItem in this.bill) {
      if (itemName === this.bill[billItem].name) {
        billItemCheck = true;
      }
    }


    // add item or quantity to bill depending on if item is already on bill
    
    if (billItemCheck) {
      // add quantity
      for (var billItem in this.bill) {
        if (itemName === this.bill[billItem].name) {
          this.bill[billItem].quantity += quantity;
        }
      }

    } else {
      // add new object with item name and quantity
      this.bill[itemName] = {name: itemName, quantity: quantity};
    }

  },

  voidLastItem: function() {
    this.total -= this.lastItemCost;

    // delete last scanned item & quantity from the bill

    for (var billItem in this.bill) {
      if (this.lastItemName === this.bill[billItem].name) {
        // if item was added to the bill previously, subtract quantity
        if (this.bill[billItem].quantity > this.lastItemQuantity) {
          this.bill[billItem].quantity -= this.lastItemQuantity;
        } else {
        // if item was the last item added to the bill, delete the entire item
          delete this.bill[billItem];
        }
      }
    }
  },

  voidItem: function(itemName, quantity) {
    for (var item in itemList) {
      if (itemName === itemList[item].name) {
        this.total -= ( itemList[item].price * quantity );
        console.log(quantity + ' ' + itemList[item].name + ' has been voided.');

        // remove from bill
        for (var billItem in this.bill) {
          if (itemList[item].name === this.bill[billItem].name) {

            // validate and/or subtract void quantity from bill
            if (quantity > this.bill[billItem].quantity) {
              console.log('The void quantity exceeds the purchased quantity!');
            } else if (quantity === this.bill[billItem].quantity) {
              console.log('This item has been removed from the bill: ' + this.bill[billItem].name);
              delete this.bill[billItem];
            } else {
              this.bill[billItem].quantity -= quantity;
              console.log(quantity + ' ' + this.bill[billItem].name + ' has been removed from the bill.');
            }
          }
        }
      }
    }
  },

  staffDiscount: function(discount) {
    this.total *= ((100 - discount)/100);
    console.log('Your staff discount of ' + discount + '% has been applied.');
  },

  printBill: function() {
    console.log('Here is your bill:');
    for (var billItem in this.bill) {
      console.log('Item: ' + this.bill[billItem].name + ' Quantity: ' + this.bill[billItem].quantity);
    }
  }
};

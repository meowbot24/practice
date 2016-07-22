cashRegister.add('milk', 6); // add 6 milk to total

cashRegister.add('kitty food', 2); // add 2 kitty food to total

cashRegister.voidItem('kitty food',1); // void 1 kitty food 

cashRegister.add('milk', 4); // add 4 milk to total

cashRegister.voidLastItem(); // void 4 milk

cashRegister.add('kitty food', 2); // add 2 kitty food to total

cashRegister.add('popcorn',4);
cashRegister.add('candy',3);

cashRegister.staffDiscount(20); // 20% staff discount

console.log('Your total is: ' + cashRegister.total); // log total

cashRegister.printBill(); // print all items and quantities added to total

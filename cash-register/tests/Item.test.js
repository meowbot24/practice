describe('Item', function() {
  var Item;

  beforeEach(function() {
    // Instantiate the `Item.services'.
    module('Item.services');

    // Manually call injection to get access to the Item service.
    // Fun Fact: Apparantly _{Service_Name}_ will grab the '{Service_Name}'.
    inject(function (_Item_) {
      // We grab this Item service instance to do our tests.
      Item = _Item_;
    });
  });

  describe('Constructor', function() {
    it('assigns a name', function() {
      var item = new Item('meow mix');
      expect(item.name).toBe('meow mix');
    });

    it('assigns a price', function() {
      var item = new Item('meow mix', 3.99);
      expect(item.price).toBe(3.99);
    });

  });
});
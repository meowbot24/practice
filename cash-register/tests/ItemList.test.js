describe('ItemList', function() {
  var ItemList;
  var Item;

  beforeEach(function() {
    module('Item.services');

    // _Item_ can be injected in this way
    // because it's also part of the module 'Item.services'
    inject(function (_ItemList_, _Item_) {
      ItemList = _ItemList_;
      Item = _Item_;
    });
  });

  describe('list', function() {
    it('should be an object', function() {
      expect(typeof(ItemList.list)).toBe("object");
    });

    it('should be an empty object', function() {
      expect(Object.keys(ItemList.list).length).toEqual(0);
    });
  });

  describe('addNewItem', function() {
    it('should be a method', function() {
      expect(typeof(ItemList.addNewItem)).toBe("function");
    });
  });


});
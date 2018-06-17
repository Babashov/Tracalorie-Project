// Storage Controller
// Item Controller
const ItemCtrl = (function(id,name,calories){
  
  // Controller
  const Item = function(){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items:[
      {id:0,name:'Chickens',calories:1500},
      {id:1,name:'Eggs',calories:300},
      {id:2,name:'Meat',calories:1150}
    ],
    currentItem:null,
    totalCalories:0
  }

  return {
    getItems:function(){
      return data.items;
    },
    logData:function(){
      return data;
    }
  }

})()
// UI Controller
const UICtrl = (function(){
  
  // UI Selectors
  UiSelectors = {
    itemList: 'item-list'
  }

  // Public methods
  return {
    populateItemList:function(items){
      let html = '';
      items.forEach((item)=>{
        html +=`
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>
        `;
      });

      document.getElementById(UiSelectors.itemList).innerHTML = html;
    }
  }
})();
// App Controller
const App = (function(ItemCtrl,UICtrl){
return {
  init:function(){
    // Get Items
    const items = ItemCtrl.getItems();
    // Add Items To UI
    UICtrl.populateItemList(items);
  }
}
})(ItemCtrl,UICtrl);

App.init();
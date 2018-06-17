// Storage Controller
// Item Controller
const ItemCtrl = (function(){
  
  // Controller
  const Item = function(id,name,calories){
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
    },
    addItem:function(name,calories){
      let ID;
      if(data.items.length > 0)
      {
        ID = data.items[data.items.length - 1].id + 1;
      }else{
        ID = 0;
      }
      // Parse To Int $calories
      calories = parseInt(calories);
      // Creating New Item Object
      const newItem = new Item(ID,name,calories);
      // Pushing newItem Object To data.items
      data.items.push(newItem);
    }
  }

})()
// UI Controller
const UICtrl = (function(){
  
  // UI Selectors
  UiSelectors = {
    itemList: '#item-list',
    addBtn:'.add-button',
    itemName:'#item-name',
    itemCalories:'#item-calories'
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

      document.querySelector(UiSelectors.itemList).innerHTML = html;
    },
    getItemInput:function(){
      
      return {
        name:document.querySelector(UiSelectors.itemName).value,
        calories:document.querySelector(UiSelectors.itemCalories).value
      }
    },
    getSelectors:function(){
      return UiSelectors;
    }
  }
})();
// App Controller
const App = (function(ItemCtrl,UICtrl){
  // Load Event Listeners
  const loadEventListeners = function(){
  
  // Get UI Selectors
  const UiSelectors = UICtrl.getSelectors();
  document.querySelector(UiSelectors.addBtn).addEventListener('click',itemAddSubmit);
  }
  const itemAddSubmit = function(e){

    const input = UICtrl.getItemInput();
    if(input.name !== '' && input.calories !== '')
    {
      ItemCtrl.addItem(input.name,input.calories);
    }
    e.preventDefault();
  }
return {
  init:function(){
    // Get Items
    const items = ItemCtrl.getItems();
    // Add Items To UI
    UICtrl.populateItemList(items);
    // Loading Event Listeners
    loadEventListeners();
  }
}
})(ItemCtrl,UICtrl);

App.init();
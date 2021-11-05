function Pizza(size,toppings){
  this.size=size;
  this.toppings=toppings;
}

Pizza.prototype.getCost=function(){
  let cost=0;
  if (this.size="large"){
    cost+=16;
  }
  else if (this.size="medium"){
    cost+=14;
  }
  else{
    cost+=12;
  }
  const toppings = this.toppings;
  const highPriceItems = ["veggie sausage","veggie pepperoni", "veggie bacon", "tofu ricotta"];
  const otherPriceItems = ["artichokes", "mushrooms", "basil", "olives","tomatoes","onions","peppers", "spinach", "garlic", "pineapple"]; 
  highPriceItems.forEach(function(item){
    if(toppings.includes(item)){
      cost+=2;
    }
  })
  otherPriceItems.forEach(function(item){
    if(toppings.includes(item)){
      cost+=1;
    }
  })

  return cost;
}
let newPizza;

function getChecked(){
  const highPriceItems = ["veggie sausage","veggie pepperoni", "veggie bacon", "tofu ricotta"];
  const otherPriceItems = ["artichokes", "mushrooms", "basil", "olives","tomatoes","onions","peppers", "spinach", "garlic", "pineapple"]; 
  let toppingsChecked=[];
  highPriceItems.forEach(function(item){
      if($("#"+item).is(":checked")){
        toppings.push($("#"+item).val());
      }
    });
    otherPriceItems.forEach(function(item){
      if($("#"+item).is(":checked")){
        toppings.push($("#"+item).val());
      }
    });
    return toppings;
}

$(document).ready(function(){
  $("#form-pizza").submit(function(event){
    event.preventDefault();
    const toppingsSelected = getChecked();
    const size = $("input[name='size']:checked").val()
    newPizza= new Pizza(size, toppingsSelected);
  });
});
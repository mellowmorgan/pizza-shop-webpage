function Pizza(size,toppings){
  this.size=size;
  this.toppings=toppings;
}

Pizza.prototype.getCost=function(){
  let cost=0;
  if (this.size==="large"){
    cost+=16;
  }
  else if (this.size==="medium"){
    cost+=14;
  }
  else{
    cost+=12;
  }
  const toppings = this.toppings;
  const highPriceItems = ["sausage","pepperoni", "bacon", "tofu"];
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
  const highPriceItems = ["sausage","pepperoni", "bacon", "tofu"];
  const otherPriceItems = ["artichokes", "mushrooms", "basil", "olives","tomatoes","onions","peppers", "spinach", "garlic", "pineapple"]; 
  let toppingsChecked=[];
  highPriceItems.forEach(function(item){
      if($("#"+item).is(":checked")){
        toppingsChecked.push($("#"+item).val());
      }
    });
    otherPriceItems.forEach(function(item){
      if($("#"+item).is(":checked")){
        toppingsChecked.push($("#"+item).val());
      }
    });
    return toppingsChecked;
}

$(document).ready(function(){
  $("#form-pizza").submit(function(event){
    event.preventDefault();
    const toppingsSelected = getChecked();
    const size = $("input[name='size']:checked").val()
    newPizza= new Pizza(size, toppingsSelected);
    //pizza.size correct
    const cost = newPizza.getCost();//changing pizza size to large somehow
    $("#total-cost").html("$" + cost);
    
    $("#cart").show();
  
  });
});
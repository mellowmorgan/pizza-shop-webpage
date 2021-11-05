function PizzasInCart(){
  this.pizzas = {};
  this.currentId = 0;
}
PizzasInCart.prototype.assignId=function(){
  this.currentId++;
  return this.currentId;
}
PizzasInCart.prototype.addPizza=function(pizza){
  pizza.id=this.assignId();
  this.pizzas[pizza.id]=pizza;
  
}
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

let pizzas = new PizzasInCart();

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
function displayPizzas(pizzaList){
  $("#pizza-list").empty();
  Object.keys(pizzaList.pizzas).forEach(function(key){
    const pizza=pizzaList.pizzas[key];
    $("#pizza-list").append("<li> Pizza " + pizza.id + " (size: "+pizza.size + "; toppings: "+ pizza.toppings.join(", ") + ")</li>");

  });
}
function attachListeners(){
  $("#").on("click",function(){

  });
  $("#").on("click",function(){

  });
}

$(document).ready(function(){
  attachListener();
  $("#form-pizza").submit(function(event){
    event.preventDefault();
    const toppingsSelected = getChecked();
    const size = $("input[name='size']:checked").val()
    newPizza= new Pizza(size, toppingsSelected);
    //pizza.size correct
    const cost = newPizza.getCost();//changing pizza size to large somehow
    pizzas.addPizza(newPizza);
    $("#total-cost").html("$" + cost);
    $("#cart").show();
    displayPizzas(pizzas);
  });
});
//Business Logic
function PizzasInCart(){
  this.pizzas = {};
  this.currentId = 0;
  this.totalCost=0;
}
PizzasInCart.prototype.assignId=function(){
  this.currentId++;
  return this.currentId;
}
PizzasInCart.prototype.deletePizza=function(id){
  if (this.pizzas[id] === undefined) {
    return false;
  }
  this.totalCost=this.totalCost-(this.pizzas[id].getCost());
  delete this.pizzas[id];
  return true;
};
PizzasInCart.prototype.addPizza=function(pizza){
  pizza.id=this.assignId();
  this.pizzas[pizza.id]=pizza;
  this.totalCost+=pizza.getCost();
  
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

//Utility Logic
function deleteCartPizzas(){
  Object.keys(pizzas.pizzas).forEach(function(key){
    pizzas.deletePizza(key);
  });
  pizzas.currentId = 0;
}

//UI Logic
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

function displayPizzas(){
  const toppingsSelected = getChecked();
  const size = $("input[name='size']:checked").val()
  newPizza= new Pizza(size, toppingsSelected);
  pizzas.addPizza(newPizza);
  let cost = pizzas.totalCost;
  $("#pizza-list").empty();
  $("#total-cost").html("$" + cost);
  Object.keys(pizzas.pizzas).forEach(function(key){
    const pizza=pizzas.pizzas[key]; //I'm realizing my choice of variable names was bad
    let toppings="none";
    if (pizza.toppings.length>0){
      toppings=pizza.toppings.join(", ")
    } 
    $("#pizza-list").append("<li> Pizza " + pizza.id + " (size: "+pizza.size + "; toppings: "+ toppings+ "; price: $"+ pizza.getCost()+")</li>");
  });
  $("#cart").show();
  $('#form-pizza').trigger("reset");
}

function attachListeners(){

  $("#delivery").on("click",function(){
    $("#delivery-form").show();
    $("#pickup").hide();
    $("#delivery").hide();
  });
  $("#pickup").on("click",function(){
    $("#pickup-form").show();
    $("#pickup").hide();
    $("#delivery").hide();

  });
  $("button#empty").on("click",function(){
    deleteCartPizzas();
    $("#pizza-list").empty();
    $("#total-cost").html("$" + 0);
    $(this).delay(1900).queue(function() {
      $("#cart").hide();
      $(this).dequeue();
   });
    
  });
  $("#myBtn").on("click", function() {
    $("#myModal").show();
  });

  $(".close").on("click", function() {
   $("#myModal").hide();
   $("#delivery").show();
   $("#pickup").show();
   $('#form1').trigger("reset");
   $('#form2').trigger("reset");
   $("#pickup-form").hide();
   $("#delivery-form").hide();

  });
  //didn't actually do anything with modal forms values
  //would create Customer constructor if I had the time
}

let newPizza;
let pizzas = new PizzasInCart();
$(document).ready(function(){
  attachListeners();
  $("#form-pizza").submit(function(event){
    event.preventDefault();
    displayPizzas();
  });
});
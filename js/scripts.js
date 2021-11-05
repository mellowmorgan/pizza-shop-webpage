function PizzasInCart(){
  this.pizzas = {};
  this.currentId = 0;
}
PizzasInCart.prototype.assignId=function(){
  this.currentId++;
  return this.currentId;
}
PizzasInCart.prototype.deletePizza=function(id){
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
};
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
function deleteCartPizzas(){
  Object.keys(pizzas.pizzas).forEach(function(key){
    pizzas.deletePizza(key);
  });
}
let pizzas = new PizzasInCart();
function displayPizzas(){
  const toppingsSelected = getChecked();
  const size = $("input[name='size']:checked").val()
  newPizza= new Pizza(size, toppingsSelected);
 
  const cost = newPizza.getCost();
  pizzas.addPizza(newPizza);
  $("#pizza-list").empty();
  $("#total-cost").html("$" + cost);
  
  Object.keys(pizzas.pizzas).forEach(function(key){
    const pizza=pizzas.pizzas[key];
    $("#pizza-list").append("<li> Pizza " + pizza.id + " (size: "+pizza.size + "; toppings: "+ pizza.toppings.join(", ") + ")</li>");

  });
  $("#cart").show();
  $('#form-pizza').trigger("reset");
  
}
function attachListeners(){
  // $("#").on("click",function(){

  // });
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
  //I'm not actually going to do anything with these values below;
  //If I had more time I'd do a Customer constructor to store it.
  $("#form1").submit(function(){
    $("#pickup-name").val();
    $("#pickup-phone").val();
    
  });
  $("#form2").submit(function(){
    $("#delivery-name").val();
    $("#delivery-address").val();
    $("#delivery-phone").val();
  });

  
}

$(document).ready(function(){
  attachListeners();
  $("#form-pizza").submit(function(event){
    event.preventDefault();
    displayPizzas();
  });
});
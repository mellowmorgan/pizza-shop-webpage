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
  const mediumPriceItems = ["artichokes", "eggplant", "mushrooms", "basil", "olives"];
  const lowPriceItems = ["tomatoes","onions","peppers", "spinach", "garlic", "pineapple"];
  highPriceItems.forEach(function(item){
    if(toppings.includes(item)){
      cost+=2;
    }
  })
  mediumPriceItems.forEach(function(item){
    if(toppings.includes(item)){
      cost+=1;
    }
  })
  lowPriceItems.forEach(function(item){
    if(toppings.includes(item)){
      cost+=.5;
    }
  });
  return cost;
}


function Pizza(size,toppings){
  this.size=size;
  this.toppings=toppings;
}

Pizza.prototype.getCost=function(){
  let cost =0;
  if (this.size="large"){
    cost+=16;
  }
  else if (this.size="medium"){
    cost+=14;
  }
  else{
    cost+=12;
  }
  highPriceItems = ["veggie sausage","veggie pepperoni", "veggie bacon", "tofu ricotta"];
  mediumPriceItems = ["artichokes", "eggplant", "mushrooms", "basil", "olives"];
  lowPriceItems = ["tomatoes","onions","peppers", "olives", "spinach", "garlic", "pineapple"];
  this.highPriceItems.forEach(function(item){
    if(this.toppings.includes(item)){
      cost+=2;
    }
  })
  this.mediumPriceItems.forEach(function(item){
    if(this.toppings.includes(item)){
      cost+=1;
    }
  })
  this.lowPriceItems.forEach(function(item){
    if(this.toppings.includes(item)){
      cost+=.5;
    }
  });
  return cost;
}


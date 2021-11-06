# Pizza Shop

By Morgan Waites

Pizza shop webpage for making custom pies and displaying total price.

## Technologies Used
* HTML
* CSS
* Bootstrap
* Javascript/JQuery

## Setup/Installation Instructions
* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html.

## Known Bugs
* Pickup/Delivery modal popup doesn't actually work. Worked on display but never got to functionality.

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites.


## Tests

Describe: Pizza()<br>

Test: "It should return a Pizza object with two properties for toppings and size"<br>
Code: const myPizza = new Pizza("large", ["mushrooms", "veggie sausage", "olives", "basil", "artichokes"]);<br>
Expected Output: Pizza {  size: "large", toppings: ["mushrooms", "veggie sausage", "olives", "basil", "artichokes"]}<br>

Describe: Pizza.prototype.getCost()<br>

Test: "It should return cost of pizza object called on, cost determined by toppings and size"<br>
Code: const myPizza.getCost();<br>
Expected Output: 28<br>

Describe: PizzasInCart()<br>

Test: "It should return an object with empty object for holding pizzas"<br>
Code: const myPizzas = new PizzasInCart();<br>
Expected Output: myPizzas { pizzas: {} }<br>

Describe: PizzasInCart.prototype.addPizza(myPizza)<br>

Test: "It should add Pizza object myPizza into pizzas property of PizzasInCart"<br>
Code: myPizzas.addPizza(myPizza);<br>
Expected Output: myPizzas { pizzas: {MyPizza} }<br>

Describe: PizzasInCart.prototype.assignId()<br>

Test: "It should return unique ID"<br>
Code: myPizzas.assignId;<br>
Expected Output: 1<br>

Describe: PizzasInCart.prototype.delete(id)<br>

Test: "It should return true if argument 1 passed and delete myPizza"<br>
Code: myPizzas.delete(1)<br>
Expected Output: true<br>

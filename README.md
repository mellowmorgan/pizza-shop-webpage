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
* No known bugs.

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites.


## Tests

Describe: Pizza()<br>

Test: "It should return a Pizza object with two properties for toppings and size"<br>
Code: const myPizza = new Pizza(["mushrooms", "veggie sausage", "olives", "basil", "artichokes"], "large");<br>
Expected Output: Pizza { toppings: ["mushrooms", "veggie sausage", "olives", "basil", "artichokes"], size: "large" }<br>

Describe: Pizza.prototype.getCost()<br>

Test: "It should return cost of pizza object called on, cost determined by toppings and size"<br>
Code: const myPizza.getCost();<br>
Expected Output: 28<br>

Describe: PizzasInCart()<br>

Test: "It should return an object with empty object for holding pizzas"<br>
Code: const myPizzas = new PizzasInCart();<br>
Expected Output: PizzasInCart { pizzas: {} }<br>

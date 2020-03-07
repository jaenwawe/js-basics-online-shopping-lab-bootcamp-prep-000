var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.random()})
 
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var sentence = `In your cart, you have "
  var contents= ${itemName} at ${itemPrice}}`
  var end = "."
  if (cart.length===0 || cart === undefined)
  return "Your shopping cart is empty."
  
  for (let i = 0; i < cart.length ; i++)
  {
  sentence = sentence + `${Object.cart[itemName]} at ${Object.cart[itemPrice]}}` + end
  }
  
  return sentence
}

function total() {
  // write your code here
}

function removeFromCart(item) {
//cart.pop()
}

function placeOrder(cardNumber) {
  // write your code here
}

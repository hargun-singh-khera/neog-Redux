import { createStore } from "redux";
import cartReducer from "./cartReducer";
import { addToCart, calculateTotal, removeFromCart } from "./actions";

const store = createStore(cartReducer);

store.subscribe(() => {
    // console.log(store.getState())
    updateCart()
})


const productList = document.querySelector("#productList")
const cartList = document.querySelector("#cartList")
const cartTotal = document.querySelector("#cartTotal")

const products = [  
    { id: 1, name: "Product A", price: 10 },  
    { id: 2, name: "Product B", price: 20 },  
    { id: 3, name: "Product C", price: 15 } 
];

window.addToCartHandler = (productId) => {
    const product = products.find(product => product.id === productId)
    store.dispatch(addToCart(product))
    store.dispatch(calculateTotal())
}

const renderProducts = () => {
    productList.innerHTML = products.map(product => `<li>${product.name} - Rs.${product.price} <button onClick="addToCartHandler(${product.id})">Add to Cart</button></li>`).join("")
}

renderProducts()

window.removeFromCartHandler = (productId) => {
    store.dispatch(removeFromCart(productId))
    store.dispatch(calculateTotal())
}

const updateCart = () => {
    const state = store.getState();
    cartList.innerHTML = state.items.map((item, index) => `<li>${item.name} - Rs.${item.price} - Quantity: ${item.quantity} <button onClick="removeFromCartHandler(${item.id})">Remove</button></li>`).join("")
    cartTotal.textContent = state.total
}

updateCart()
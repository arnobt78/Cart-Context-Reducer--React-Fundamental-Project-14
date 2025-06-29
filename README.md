# Cart - React Fundamental Project 14

<img width="837" alt="Screenshot 2025-02-09 at 16 41 04" src="https://github.com/user-attachments/assets/12cd0f22-c57d-444a-9eff-6300a20b8fd8" />

---

A modern, fully functional React Shopping Cart application designed for learning React fundamentals. This project demonstrates how to manage state with useReducer and Context API, fetch data asynchronously, and implement real-world cart features using efficient JavaScript data structures like Map.

- **Live-Demo:** https://cart-arnob.netlify.app/

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation & Running](#installation--running)
6. [Application Walkthrough](#application-walkthrough)
7. [Global State & useReducer](#global-state--usereducer)
8. [API & Data Management](#api--data-management)
9. [Component Overview](#component-overview)
10. [Key Code Examples](#key-code-examples)
11. [Learning Purposes & Keywords](#learning-purposes--keywords)
12. [Conclusion](#conclusion)

---

## Project Summary

This project is a simple shopping cart application built with React, using the `useReducer` hook for robust state management and the Context API for sharing global state. The cart is implemented as a JavaScript Map, optimizing for fast lookups and updates. The project is ideal for learners seeking to understand intermediate React concepts and modern JavaScript patterns used in e-commerce apps.

---

## Features

- Add, remove, and update items in the cart
- Adjust item quantities (increase/decrease)
- Clear the entire cart
- Fetch initial cart data from an external API
- Calculate and display cart totals (subtotal, total items)
- Efficient cart state management using Map
- Modern React patterns: useReducer, Context API, custom hooks
- Responsive and simple UI

---

## Technology Stack

- **React** (with hooks)
- **JavaScript (ES6+)**
- **Vite** (for development/build)
- **Context API & useReducer**
- **HTML/CSS**
- **External API** (for cart data)

---

## Project Structure

```
Cart--React-Fundamental-Project-14/
├── .gitignore
├── Cart.fig
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── CartContainer.jsx
    │   ├── CartItem.jsx
    │   └── ...other components
    ├── context/
    │   ├── cartContext.js
    │   ├── reducer.js
    │   └── actions.js
    ├── data/
    │   └── ... (for static/fetched data if needed)
    └── styles/
        └── ... (CSS/SCSS files)
```

> _*Note: Actual filenames may vary. Explore `/src` for up-to-date code structure._  

---

## Installation & Running

**1. Clone the Repository**

```sh
git clone https://github.com/arnobt78/Cart--React-Fundamental-Project-14.git
cd Cart--React-Fundamental-Project-14
```

**2. Install Dependencies**

```sh
npm install
```

**3. Start Development Server**

```sh
npm run dev
```

_Visit `http://localhost:5173` (or the port shown in your terminal) in your browser._

---

## Application Walkthrough

### 1. Explore

Open the app to browse a list of items fetched from the API, with add/remove and quantity controls for each item.

### 2. Cart Functionality

- **Add to Cart:** Click to add items to the cart (or adjust quantities).
- **Remove Item:** Remove a specific item from the cart.
- **Increase/Decrease Amount:** Buttons to adjust quantity per item.
- **Clear Cart:** Remove all items from the cart with one action.
- **Total Calculation:** Cart subtotal and item count update automatically.

### 3. Data Management

- **Initial Data Load:** Cart data is fetched from:  
  ```js
  const url = "https://www.course-api.com/react-useReducer-cart-project";
  ```

---

## Global State & useReducer

The cart state is managed globally using React Context and the useReducer hook.

- **Context API**: Provides cart state/functions to all components.
- **useReducer**: Handles cart logic via action types (e.g., CLEAR_CART, REMOVE_ITEM, INCREASE, DECREASE, FETCH_DATA, CALCULATE_TOTALS).

**Reducer Example:**

```js
function cartReducer(state, action) {
  switch(action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: new Map() };
    // Other cases: REMOVE_ITEM, INCREASE, DECREASE, etc.
    default:
      return state;
  }
}
```

---

## API & Data Management

- **Fetching Data**: Uses `fetch` or `axios` to pull cart items from an external API.
- **Cart State Shape**: Uses `Map` for efficient item access by ID.

**Example:**

```js
const cart = new Map();
// Add item
cart.set("itemId", { id: "itemId", name: "Item", price: 10, quantity: 1 });
// Remove item
cart.delete("itemId");
```

---

## Component Overview

- **App.jsx**: Root component, sets up context providers and main layout.
- **CartContainer.jsx**: Renders the entire cart, totals, and clear button.
- **CartItem.jsx**: Displays individual cart item, with controls for quantity and remove.
- **Context/Reducer.js**: Contains logic for updating cart state.

---

## Key Code Examples

### 1. Using Map for Cart State

```js
const cart = new Map();
cart.set("apple", { name: "Apple", price: 0.5, quantity: 3 });
cart.get("apple"); // { name: "Apple", price: 0.5, quantity: 3 }
cart.delete("apple");
for (let [key, value] of cart) {
  console.log(key, value);
}
```

### 2. Converting Array to Map

```js
const items = [
  { id: 1, name: "first", price: 10 },
  { id: 2, name: "second", price: 20 },
];
const cart = new Map(items.map((item) => [item.id, item]));
```

### 3. Example useReducer Action

```js
dispatch({ type: 'INCREASE', payload: { id: 'itemId' } });
```

---

## Learning Purposes & Keywords

- React Hooks (`useReducer`, `useContext`)
- State management patterns
- Efficient data structures (`Map`)
- API data fetching
- Component composition
- E-commerce cart logic
- Modern JavaScript (ES6+)
- Context API

---

## Conclusion

This project is a practical guide to mastering React’s state management and component patterns, with a focus on real-world e-commerce features. It’s built for both learning and demonstration, suitable for teaching how to architect robust React apps with modern best practices.

For further exploration, try extending the project with features like user authentication, product search, sorting, or integrating a backend.

---

## References & Resources

- [React Documentation](https://react.dev/)
- [MDN Web Docs - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [JS Nuggets: Array.from](https://www.youtube.com/watch?v=zg1Bv4xubwo&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=11)

---

**Happy Coding!**

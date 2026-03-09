# Cart Context Reducer - React, Vite, JavaScript, Context API, useReducer, Map, Custom CSS Fundamental Project 14

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A learning-focused shopping cart application built with React. It demonstrates **useReducer** for predictable state updates, the **Context API** for global state, and a **JavaScript Map** for efficient cart storage. Use it to understand intermediate React patterns and how to structure a small e-commerce-style UI without external state libraries.

- **Live Demo:** [https://cart-context-reducer.vercel.app/](https://cart-context-reducer.vercel.app/)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation & Running](#installation--running)
6. [Environment Variables (.env)](#environment-variables-env)
7. [Application Walkthrough](#application-walkthrough)
8. [Global State & useReducer](#global-state--usereducer)
9. [API & Data Management](#api--data-management)
10. [Component Overview & Reusability](#component-overview--reusability)
11. [Key Code Examples](#key-code-examples)
12. [Keywords & Learning Outcomes](#keywords--learning-outcomes)
13. [Conclusion](#conclusion)
14. [License](#license)

---

## Project Summary

This app is a **single-page shopping cart** that loads product data from an external API, stores the cart in a **Map**, and updates state via **useReducer** and **Context**. There is no backend; all logic runs in the browser. It is ideal for learning React state patterns, reducer flows, and component composition in a small, readable codebase.

---

## Features

- **Cart operations:** Add, remove, and update item quantities (increase/decrease).
- **Clear cart:** One action to remove all items.
- **Totals:** Automatic subtotal and total item count from the cart Map.
- **Initial data:** Cart items loaded from a public API on mount.
- **Empty state:** When the bag is empty, a **"Return to default cart"** button re-fetches the default list (no page reload).
- **UI:** Navbar with cart count, list of cart items with controls, and responsive layout with custom CSS.

---

## Technology Stack

| Technology            | Purpose                                                          |
| --------------------- | ---------------------------------------------------------------- |
| **React 18**          | UI components and hooks                                          |
| **JavaScript (ES6+)** | No TypeScript; plain JS with modules                             |
| **Vite 4**            | Dev server, build, and HMR                                       |
| **Context API**       | Global cart state and actions                                    |
| **useReducer**        | Cart state transitions (clear, remove, increase, decrease, load) |
| **Map**               | In-memory cart storage keyed by item id                          |
| **react-icons**       | FaCartPlus, FaChevronUp, FaChevronDown                           |
| **Custom CSS**        | Global and component styles in `index.css`                       |
| **ESLint**            | Linting with React and React Hooks plugins                       |

---

## Project Structure

```bash
14-cart/
├── .gitignore
├── LICENSE
├── README.md
├── index.html              # Entry HTML, meta tags, root div
├── package.json
├── package-lock.json
├── vite.config.js          # Vite + React plugin
├── eslint.config.js        # ESLint flat config (React, hooks, refresh)
├── public/
│   └── vite.svg            # Favicon / app icon
└── src/
    ├── main.jsx            # React root, AppProvider, StrictMode
    ├── App.jsx             # Layout: loading spinner or Navbar + CartContainer
    ├── index.css           # Global + navbar, cart, cart-item styles
    ├── context.jsx         # AppContext, AppProvider, useGlobalContext, fetchData
    ├── reducer.js          # cartReducer (CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS)
    ├── actions.js          # Action type constants
    ├── utils.js            # getTotals(cart) → { totalAmount, totalCost }
    ├── data.jsx            # Fallback/static cart items (optional; API is primary)
    ├── Navbar.jsx          # Top bar with cart icon and total amount
    ├── CartContainer.jsx   # Cart list or empty state + "Return to default cart"
    └── CartItem.jsx        # Single row: image, title, price, amount controls, remove
```

**Routes:** There are no client-side routes; the app is a single view (navbar + cart content).

---

## Installation & Running

**1. Clone the repository**

```sh
git clone https://github.com/arnobt78/Cart--React-Fundamental-Project-14.git
cd Cart--React-Fundamental-Project-14
```

**2. Install dependencies**

```sh
npm install
```

**3. Start the development server**

```sh
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

**4. Other scripts**

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run build`    | Production build to `dist/`        |
| `npm run preview`  | Serve the production build locally |
| `npm run lint`     | Run ESLint                         |
| `npm run lint:fix` | Run ESLint with auto-fix           |

---

## Environment Variables (.env)

This project **does not require** any environment variables to run. The cart API URL is set directly in `src/context.jsx`:

```js
const url = "https://www.course-api.com/react-useReducer-cart-project";
```

If you want to make the API URL configurable (e.g. for different environments or a future backend), you can use Vite’s env system:

**1. Create a `.env` file in the project root (optional):**

```env
VITE_CART_API_URL=https://www.course-api.com/react-useReducer-cart-project
```

**2. Use it in code (e.g. in `context.jsx`):**

```js
const url =
  import.meta.env.VITE_CART_API_URL ||
  "https://www.course-api.com/react-useReducer-cart-project";
```

**Notes:**

- Only variables prefixed with `VITE_` are exposed to the client.
- Restart the dev server after changing `.env`.
- Do not commit secrets; `.env` is typically in `.gitignore` (this repo already ignores `.env`).

---

## Application Walkthrough

1. **Load the app**  
   The app fetches cart data from the API. A loading spinner is shown until the request completes.

2. **View the cart**  
   You see a list of items (e.g. phones) with image, title, price, quantity, and controls.

3. **Change quantity**  
   Use the up/down chevrons to increase or decrease the amount. At 1, decrease removes the item.

4. **Remove an item**  
   Click **"remove"** on a row to delete that item from the cart.

5. **Clear cart**  
   Click **"clear cart"** to empty the bag.

6. **Empty state**  
   When the cart is empty, the message **"your bag / is currently empty"** and a **"Return to default cart"** button are shown. Clicking it re-fetches the default list without reloading the page.

7. **Navbar**  
   The top bar shows a cart icon and the total number of items in the cart.

---

## Global State & useReducer

All cart state lives in **React Context** and is updated with **useReducer**.

- **Context** (`context.jsx`): `AppContext` holds cart state and actions. `AppProvider` wraps the app and runs the reducer; it also fetches initial data and exposes `clearCart`, `remove`, `increase`, `decrease`, `totalAmount`, `totalCost`, and `resetCart` (re-fetch).

- **Reducer** (`reducer.js`): Handles action types from `actions.js` and returns the next state. The cart is a **Map**; each action either replaces the Map or returns a new Map (no mutation).

**Action types:**

| Action          | Purpose                                     |
| --------------- | ------------------------------------------- |
| `CLEAR_CART`    | Empty the cart (new Map).                   |
| `REMOVE`        | Remove one item by `id`.                    |
| `INCREASE`      | Add 1 to item amount.                       |
| `DECREASE`      | Subtract 1; remove item if amount was 1.    |
| `LOADING`       | Set loading true before fetch.              |
| `DISPLAY_ITEMS` | Set cart from API array (converted to Map). |

**Reducer example (clear and remove):**

```js
if (action.type === CLEAR_CART) {
  return { ...state, cart: new Map() };
}
if (action.type === REMOVE) {
  const newCart = new Map(state.cart);
  newCart.delete(action.payload.id);
  return { ...state, cart: newCart };
}
```

---

## API & Data Management

- **Backend:** None. The app is frontend-only.

- **External API:** One read-only endpoint is used for initial cart data:

  **GET** `https://www.course-api.com/react-useReducer-cart-project`

  It returns a JSON array of items. Each item has at least: `id`, `title`, `price`, `img`, `amount` (or similar). The app converts this array to a **Map** keyed by `id` for O(1) lookups and updates.

- **Fetching:** Done in `context.jsx` inside `AppProvider`: on mount, `fetchData()` dispatches `LOADING`, then `fetch(url)`, then `DISPLAY_ITEMS` with the parsed JSON. The same `fetchData` is exposed as `resetCart` for the empty-state button.

---

## Component Overview & Reusability

### App.jsx

- **Role:** Root layout. Reads `loading` from context; shows spinner or `Navbar` + `CartContainer`.
- **Reuse:** Wrap any “app shell” that depends on the same context in `AppProvider`.

### Navbar.jsx

- **Role:** Renders a fixed top bar with a title (“useReducer”) and cart icon + total item count (`totalAmount` from context).
- **Reuse:** Use in any screen that needs a cart summary; ensure the app is wrapped in the same context so `useGlobalContext()` works.

### CartContainer.jsx

- **Role:** If cart is empty, shows “your bag / is currently empty” and a “Return to default cart” button. Otherwise renders the list of `CartItem` and a footer with total and “clear cart”.
- **Reuse:** Replace the “Return to default cart” action with your own (e.g. redirect or different API). The structure (empty vs list + footer) can be reused for any cart UI that uses the same context shape.

### CartItem.jsx

- **Role:** One row per item: image, title, price, amount controls (up/down), and remove. Uses `useGlobalContext()` for `remove`, `increase`, `decrease`.
- **Reuse:** Use in other projects by keeping the same props (`id`, `img`, `title`, `price`, `amount`) and the same context methods, or pass callbacks as props for a more generic component.

### context.jsx

- **Role:** Defines `AppContext`, `AppProvider`, and `useGlobalContext`. Holds cart state, totals, and all cart actions including `resetCart`.
- **Reuse:** Copy `AppProvider` and the reducer/actions/utils into another app to get the same cart logic; swap the API URL or add `.env` as above.

### reducer.js & actions.js

- **Role:** Centralized action types and pure reducer for the cart Map.
- **Reuse:** Use the same pattern (action constants + reducer) in any React app that needs reducer-based cart state.

### utils.js

- **Role:** `getTotals(cart)` iterates the Map and returns `{ totalAmount, totalCost }`.
- **Reuse:** Use in any place you have a Map (or array) of items with `amount` and `price`.

---

## Key Code Examples

### 1. Using Map for cart state

```js
const cart = new Map();
cart.set("itemId", { id: "itemId", title: "Product", price: 9.99, amount: 2 });
cart.get("itemId"); // { id, title, price, amount }
cart.delete("itemId");
for (const [id, item] of cart) {
  console.log(id, item);
}
```

### 2. Converting API array to Map

```js
const items = await response.json();
const newCart = new Map(items.map((item) => [item.id, item]));
```

### 3. Consuming context in a component

```js
const { cart, remove, increase, decrease, totalAmount } = useGlobalContext();
const cartArray = Array.from(cart.entries());
```

### 4. Dispatching actions

```js
dispatch({ type: CLEAR_CART });
dispatch({ type: REMOVE, payload: { id: "rec123" } });
dispatch({ type: INCREASE, payload: { id: "rec123" } });
dispatch({ type: DECREASE, payload: { id: "rec123" } });
dispatch({ type: DISPLAY_ITEMS, payload: { cart: apiCartArray } });
```

### 5. Totals from a Map

```js
export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (const { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};
```

---

## Keywords & Learning Outcomes

- **React:** Hooks (`useReducer`, `useContext`, `useEffect`), Context API, component composition.
- **State:** Reducer pattern, action types, immutable updates, Map as state.
- **Data structures:** JavaScript `Map`, `Array.from`, iterators.
- **API:** `fetch`, async/await, loading state.
- **Concepts:** E-commerce cart logic, global state without Redux, custom hooks (`useGlobalContext`).

---

## Conclusion

This project is a small, teachable example of a React cart: **Context** for global state, **useReducer** for updates, and a **Map** for the cart. You can extend it with local storage, a real backend, or product listing and search. Use the structure and code snippets above to adapt the components and patterns to your own apps.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

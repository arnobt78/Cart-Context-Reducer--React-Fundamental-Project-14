/**
 * Cart reducer: pure function (state, action) -> newState.
 * Cart is stored as a Map(key = item id, value = item). We never mutate; we copy and return new state.
 */
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    // If amount is 1, decrease means remove the item
    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    // API returns array; we convert to Map keyed by id for O(1) lookups
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;

/**
 * Global cart state via React Context + useReducer.
 * AppProvider: fetches initial cart from API on mount, exposes state and actions.
 * useGlobalContext: hook to read cart state and call clearCart, remove, increase, decrease, resetCart.
 */
import { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';
import { getTotals } from './utils';

// External API used for initial cart data (and for "Return to default cart" reset)
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

// State shape: loading flag + cart as Map(id -> item)
const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Totals are derived from the cart Map on every render (see utils.getTotals)
  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  // Fetches cart from API and dispatches DISPLAY_ITEMS; also exposed as resetCart for empty state
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  // Load cart data once on mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
        resetCart: fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/** Custom hook: use this in any component that needs cart state or actions */
export const useGlobalContext = () => {
  return useContext(AppContext);
};

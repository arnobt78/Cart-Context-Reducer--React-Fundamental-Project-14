/**
 * Computes total item count and total cost from the cart Map.
 * @param {Map} cart - Map of id -> { amount, price, ... }
 * @returns {{ totalAmount: number, totalCost: number }}
 * Used in context.jsx to expose totalAmount (navbar) and totalCost (cart footer).
 */
export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (let { amount, price } of cart.values()) {
    totalAmount += amount;
    totalCost += amount * price;
  }
  return { totalAmount, totalCost };
};

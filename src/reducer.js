const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      }),
    };
  }

  if (action.type === "DECREASE") {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount > 0), // Видаляємо товари з кількістю 0
    };
  }

  if (action.type === "GET_TOTALS") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const itemTotal = cartItem.amount * cartItem.price;
        cartTotal.total += itemTotal;
        cartTotal.amount += cartItem.amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );

    if (action.type === "LOADING") {
      return { ...state, loading: true }
    }

    if (action.type === "DISPLAY_ITEMS") {
      return { ...state, cart: action.payload, loading: false }
    }

    // Округляємо total до двох десяткових часток
    return { ...state, total: Math.round(total * 100) / 100, amount };
  }

  return state;
};

export default reducer;

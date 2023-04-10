export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.item.id
            );
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.item.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems,
                        { ...action.payload.item, quantity: 1 },
                    ],
                };
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case "CHANGE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: Number(action.payload.quantity) }
                        : item
                ),
            };
        default:
            return state;
    }
};
import { type CartAction, type CartState } from "../types/cart";

export function cartReducer(state:CartState, action:CartAction):CartState {
    switch (action.type) {
        case "ADD":{
            const { product, quantity } = action.payload;
            const existingItem = state.items.find(
                (item) => item.productId === product.id
            );

            if(existingItem){
                return {
                    ...state,
                    items:state.items.map((item)=> item.productId=== product.id
                    ?{...item, quantity:item.quantity + quantity}: item ),
                    totalQuantity: state.totalQuantity + quantity,
                    totalPrice: state.totalPrice + product.price * quantity,
                }

            }else{
                return {
                    ...state,
                    items: [...state.items, { productId: product.id, quantity, price: product.price }],
                    totalQuantity: state.totalQuantity + quantity,
                    totalPrice: state.totalPrice + product.price * quantity,
                }
            }
        }

        case "REMOVE": {
            const { productId } = action.payload;
            const existingItem = state.items.find(
                (item) => item.productId === productId
            );

            if (!existingItem) return state;

            return {
                ...state,
                items: state.items.filter((item) => item.productId !== productId),
                totalQuantity: state.totalQuantity - existingItem.quantity,
                totalPrice: state.totalPrice - existingItem.price * existingItem.quantity,
            };
        }

        case "UPDATE": {
            const { productId, quantity } = action.payload;
            const existingItem = state.items.find(
                (item) => item.productId === productId
            );

            if (!existingItem) return state;

            return {
                ...state,
                items: state.items.map((item) =>
                    item.productId === productId
                        ? { ...item, quantity }
                        : item
                ),
                totalQuantity: state.totalQuantity - existingItem.quantity + quantity,
                totalPrice: state.totalPrice - existingItem.price * existingItem.quantity + existingItem.price * quantity,
            };
        }

        case "CLEAR": {
            return {
                items: [],
                totalQuantity: 0,
                totalPrice: 0,
            };
        }

        default:
            return state;
    }
}
//Yordamchi functiya
function computedTotalPrices(state: CartState): CartState  {
    const totalQuantity= state.items.reduce((acc,item)=> acc +item.quantity,0)
    const totalPrice= state.items.reduce((acc,item)=> acc + item.quantity*item.price,0)
    return { 
        ...state, 
        totalQuantity, 
        totalPrice 
    };
}

export const initialCartState = computedTotalPrices({ 
    items: [], 
    totalQuantity: 0, 
    totalPrice: 0 
});
 
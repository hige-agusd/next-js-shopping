import { Currencies, ItemInCart } from "./types";

export const addItemUtil = (cart: ItemInCart[], newItemId: string): ItemInCart[] => {
    let newCart = [...cart];
    const existingItem = newCart?.find(item => item.id === newItemId);
    if (existingItem) {
        existingItem.qty++;
    } else {
        newCart = [
            ...newCart,
            {
                id: newItemId, 
                qty: 1,
            }
        ]
    }
    return newCart;
}

export const deleteItemUtil = (cart: ItemInCart[], deleteItemId: string) => {
    return [...cart].filter((item) => {
        return item.id !== deleteItemId
    });
}

export const decreaseItemUtil = (cart: ItemInCart[], removeItemId: string): ItemInCart[] => {
    let newCart = [...cart];
    const existingItem = newCart?.find(item => item.id === removeItemId);
    if (existingItem) {
        if(existingItem.qty > 1) {
            existingItem.qty--;
        } else {
            return deleteItemUtil(newCart, removeItemId);
        }
    }
    return newCart;
}

export const countItemsInCart = (cart) => {
    return cart?.reduce( (accumulator, currVal) => accumulator + currVal.qty, 0 );
}

export const formatPrice = (price: number, currency: string): string[] => {
    if(currency === Currencies.JPY) {
        return [price.toFixed(0), undefined];
    } else {
        return price.toFixed(2).split('.');
    }
}

export const convertCurrencies = (rates) => {
    const USD = 1 / rates.USD;
    return {
        [Currencies.EUR]: USD,
        [Currencies.GBP]: USD * rates.GBP,
        [Currencies.JPY]: USD * rates.JPY,
    }

}
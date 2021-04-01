import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../store/slices';
import CartProducts from '../src/components/cart-products';
import { ICartProduct } from '../src/components/cart-product';
import { useRouter } from 'next/router';

const CartPage: FC = () => {
    const { cart: {cart}, products: {products}} = useSelector(
        ({cart, products}: State) => (
            {
                cart,
                products
            }
        )
    );

    const router = useRouter();
    if (!cart || !products) router.push('/');

    const cartItems:  ICartProduct[] = cart.map( (cartItem) => {
        const {image, title, price, id} = products?.find(p => p.id === Number(cartItem.id));
        const product = {
            ...cartItem,
            id,
            title,
            price,
            image,
        };
        return product;
    });
    
    return <CartProducts products={cartItems} />
}

export default CartPage;


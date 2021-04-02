import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart }from '@fortawesome/free-solid-svg-icons';
import { countItemsInCart } from '../utils/helper';
import styles from '../../styles/CartButton.module.css';
import Link from 'next/link';
import { State } from '../../store/slices';


const CartButton: FC = () => {

    const {cart} = useSelector(({cart}: State ) => ({
        cart: cart.cart,
    }))


    const totalItems = countItemsInCart(cart);
    return (
        <li className={styles.container} data-badge={totalItems}>
            <Link href="/cart">
                <a><FontAwesomeIcon icon={faShoppingCart} data-badge={totalItems} /></a>
            </Link>
        </li>
    )
}

export default CartButton;
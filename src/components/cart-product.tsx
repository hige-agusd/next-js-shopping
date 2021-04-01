import React, {FC} from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem, removeItem } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faTimes }from '@fortawesome/free-solid-svg-icons';
import { Product } from '../utils/types';
import PriceComponent from './price-component';
import styles from '../../styles/CartProduct.module.css';

export interface ICartProduct extends Pick<Product, 'title' | 'image' | 'price' | 'id' > {
    qty: number;
}

export interface CartProductProps {
    product: ICartProduct;
}

const CartProduct: FC<CartProductProps> = ({product}) => {

    const dispatch = useDispatch();

    console.log(addItem)

    const clickedPlus = (id) => {
        dispatch(addItem(id));
    }
    const clickedMinus = (id) => {
        dispatch(removeItem(id));
    }
    const clickedDelete = (id) => {
        dispatch(deleteItem(id));
    }
    return (
        <li className={styles.container}>
            <section className={styles.image}>
                    <img src={product.image} alt={`${product.title}`} />
            </section>
            <section className={styles.middle}>
                    <p>{product.title}</p>
                <section>                 
                    <PriceComponent price={Number(product.price)} />
                    <p>Qty: {product.qty}</p>
                </section>      
            </section>
            <section className={styles.last}>
                <section className={styles.total}>
                    <PriceComponent price={Number(product.price) * product.qty} />
                </section>
                <section className={styles.actions}>
                    <FontAwesomeIcon icon={faPlusCircle} onClick={(e) => clickedPlus(product.id)} />                   
                    <FontAwesomeIcon icon={faMinusCircle} onClick={(e) => clickedMinus(product.id)} />                   
                    <FontAwesomeIcon icon={faTimes} onClick={(e) => clickedDelete(product.id)} />                   
                </section>
            </section>
        </li>
    )
}

export default CartProduct;
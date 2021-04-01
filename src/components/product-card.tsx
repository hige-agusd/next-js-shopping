import React, {FC} from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus }from '@fortawesome/free-solid-svg-icons';
import { Product } from '../utils/types';
import PriceComponent from './price-component';
import styles from '../../styles/ProductCard.module.css';

export interface ProductCardProps {
    product: Product;
    onAdd: () => void;
}

const ProductCard: FC<ProductCardProps> = ({product, onAdd}) => {

    const dispatch = useDispatch();
    const clickedBtn = (e, id) => {
        e.preventDefault();
        dispatch(addItem(id));
        onAdd();
    }
    return (
        <main className={styles.container}>
            <section className={styles.image}>
                    <img src={product.image} alt={`${product.category} ${product.title}`} />
            </section>
            <section className={styles.bottom}>
                    <h1>{product.title}</h1>
                    <section>
                        <PriceComponent price={Number(product.price)} />
                        <FontAwesomeIcon icon={faCartPlus} onClick={(e) => clickedBtn(e, product.id)} />                   
                    </section>
            </section>
        </main>
    )
}

export default ProductCard;
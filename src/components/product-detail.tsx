import React, {FC} from 'react';
import { Product } from '../utils/types';
import { addItem } from '../../store/actions';
import { useDispatch } from 'react-redux';
import styles from '../../styles/ProductDetail.module.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PriceComponent from '../components/price-component';

export interface ProductDetailProps {
    product: Product;
}

const ProductDetail: FC<ProductDetailProps> = ({product}) => {
    const dispatch = useDispatch();
    const onAddItem = (id) => {
        dispatch(addItem(id));
    }
    return (
        <main className={styles.container}>
            <section className={styles.wrapper}>
                <section className={styles.detailImage} >
                    <img src={product.image} alt={`${product.category} ${product.title}`} />
                </section>
                <h1 className={styles.detailTitle}>{product.title}</h1>
                <section className={styles.detailPrice}>
                    <PriceComponent price={Number(product.price)} />
                </section>
                <h4 className={styles.detailAddToCart} onClick={() => onAddItem(product.id)}>
                    Add to cart
                    <FontAwesomeIcon icon={faCartPlus} />
                </h4>
                <h5 className={styles.detailCategory}><strong>Category:</strong> {product.category} </h5>
                <h4 className={styles.detailDescription}><strong>Description:</strong> {product.description} </h4>
            </section>
        </main>
    )
}

export default ProductDetail;
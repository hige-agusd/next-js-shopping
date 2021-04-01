import React, { FC } from 'react';
import styles from '../../styles/Home.module.css'
import { Product } from '../utils/types';
import Link from 'next/link';
import ProductCard from './product-card';
import AdditionToast from './addition-toast';

export interface ProductsComponentProps {
    products?: Product[];
}

const ProductsComponent: FC<ProductsComponentProps> = ({ products = [] }) => {
    const [toasts, setToasts] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const removeToast = () => {
        const newToasts = [...toasts];
        newToasts.shift();
        setToasts(newToasts);
    }
    let i = 0;
    const addToast = () => {
        const newToasts = [...toasts];
        setCount(count+1)
        newToasts.push(<AdditionToast key={`tost-${count}`} show remove={removeToast} />)
        setToasts(newToasts);
    }
    const productsCards = products?.map(prod => (
            <Link href="/products/[id]" as={`/products/${prod.id}`} key={prod.id} >
                <a><ProductCard product={prod} onAdd={addToast} /></a>
            </Link>
        )
    )
    const toastsStack = toasts.map(toast => <AdditionToast key={`tost-${count}`} show remove={removeToast} />);
    console.log(toasts, toastsStack)
    return (
        <div className={styles.container}>
            { productsCards}
            { toasts }
        </div>
    )
}

export default ProductsComponent;
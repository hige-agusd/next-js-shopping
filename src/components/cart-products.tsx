import React, { FC } from 'react';
import CartProduct, { ICartProduct } from './cart-product';
import PriceComponent from './price-component';
import styles from '../../styles/CartProducts.module.css';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/actions';
import CheckoutModal from './checkout-modal';
import ConfirmationToast from './confirmation-toast';

interface CartProductsProps {
    products: ICartProduct[];
}

const CartProducts: FC<CartProductsProps> = ({products}) => {

    const [modalVisible, setModalVisible] = React.useState<boolean>(false);
    const [toastVisible, setToastVisible] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [totalQty, setTotalQty] = React.useState<number|null>(null);

    const dispatch = useDispatch();

    const cartProducts = products?.map((p: ICartProduct) => 
        <CartProduct product={p} key={`cart-${p.id}`} />)

    const totals = products?.reduce( 
        (accumulator: {price: number, qty: number}, currVal) => {
            return {
                qty: accumulator?.qty + currVal.qty,
                price: accumulator?.price + Number(currVal.price) * currVal.qty,
            }
        }, { price: 0, qty: 0 }
    );

    
    const clickEmptyCart = () => {
        dispatch(clearCart());
    }
    
    const closeModal = () => {
        setModalVisible(false);
    }
    
    const clickCheckout = () => {
        if (totalQty !== totals.qty) setTotalQty(totals.qty);
        setModalVisible(true);
    }

    const handleCheckout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);            
            dispatch(clearCart());
            closeModal();
            setToastVisible(true);
        }, 1000);
    }

    return (
        <main className={styles.container}>
            <ul className={styles.list}>
                { cartProducts }
                <li className={styles.cartTotal}>
                    <p>Total:</p>
                    <p>{totals?.qty} Item{totals.qty != 1 ? 's' : ''}</p>
                    <PriceComponent price={totals?.price} />
                </li>
            </ul>
            <section className={styles.actions}>
                <Button variant="link" onClick={clickEmptyCart}>Empty Cart</Button>
                <Button variant="primary" disabled={totals.qty < 1} onClick={clickCheckout}>Checkout Cart</Button>
            </section>
            <CheckoutModal 
                show={modalVisible}
                loading={loading}
                handleClose={closeModal}
                handleCheckout={handleCheckout} />
            <ConfirmationToast show={toastVisible} setShow={setToastVisible} totalItems={totalQty} />
        </main>
    )
}

export default CartProducts;

import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome }from '@fortawesome/free-solid-svg-icons';
import CurrencySelector from './currency-selector';
import CartButton from './cart-button';
import styles from '../../styles/Header.module.css';

const Header: FC = () => {
    const router = useRouter();
    const isProductsPage = router.pathname === '/';
    return (
        <header className={styles.container}>
            <section className={styles.logo}>
            </section>
            <nav className={styles.menu}>
                { !isProductsPage && <Link href='/'><a><FontAwesomeIcon className={styles.homeIcon} icon={faHome} /></a></Link> }
                <CartButton />
                <CurrencySelector />
            </nav>
        </header>
    )
}

export default Header;
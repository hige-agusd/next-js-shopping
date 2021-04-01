import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/helper';
import CurrentCurrencyIcon from './current-currency-icon';
import styles from '../../styles/PriceComponent.module.css';
import { State } from '../../store/slices';
import { useRouter } from 'next/router';


export interface PriceComponentProps {
    price: number;
}

const PriceComponent: FC<PriceComponentProps> = ({price}) => {

    const {current, rates} = useSelector( ({currency, exchange}: State) => (
        {
            current: currency?.current,
            rates: exchange?.exchange?.rates 
        })
    );

    const router = useRouter();
    if (!rates) router.push('/');
    if (!rates) return <div>Loading</div>

    const rate = rates[current];
    const [integerPart, cents] = formatPrice(price * rate, current);

    return (
        <h3 className={styles.container}>
            <CurrentCurrencyIcon current={current} />
            <p className={styles.integer}>{integerPart}</p>
            {cents && <p className={styles.cents}>{cents}</p>}
        </h3>
    )

}

export default PriceComponent;
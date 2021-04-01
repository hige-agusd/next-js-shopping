import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { Currencies } from '../utils/types';
import { setCurrency } from '../../store/actions';
import CurrentCurrencyIcon from './current-currency-icon';
import styles from '../../styles/CartButton.module.css';
import { State } from '../../store/slices';

export interface CurrencySelectorProps {
    current: string;
    setCurrency: Function;
}

const CurrencySelector: FC<CurrencySelectorProps> = () => {

    const { current } = useSelector( ({currency}: State) => ({
        current: currency.current,
    }));

    const dispatch = useDispatch();

    const clicked = (currency) => {
        dispatch(setCurrency(currency));
    }

    return (
        <Dropdown className={styles.container}>
            <Dropdown.Toggle as={CustomToggle} className={styles.ddt }>
                <CurrentCurrencyIcon current={current} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => clicked(Currencies.JPY)}>{Currencies.JPY}</Dropdown.Item>
                <Dropdown.Item onClick={() => clicked(Currencies.GBP)}>{Currencies.GBP}</Dropdown.Item>
                <Dropdown.Item onClick={() => clicked(Currencies.EUR)}>{Currencies.EUR}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )

}

interface CustomToggleProps {
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void, 
  }

const CustomToggle = React.forwardRef<HTMLAnchorElement, CustomToggleProps>(({ children, onClick }, ref) => (
    <a
      href=""
      className="CustomToggle-CurrencySelector"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

export default CurrencySelector;
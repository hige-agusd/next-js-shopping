import React, { FC } from 'react';
import { Currencies } from '../utils/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYenSign, faEuroSign, faPoundSign }from '@fortawesome/free-solid-svg-icons';


export interface CurrentCurrencyIconProps {
    current: string;
}

const CurrentCurrencyIcon:FC<CurrentCurrencyIconProps> = ({current}) => {
    const icon = current === Currencies.JPY ? faYenSign : current === Currencies.GBP ? faPoundSign : faEuroSign;
    return <FontAwesomeIcon icon={icon} />
}

export default CurrentCurrencyIcon;
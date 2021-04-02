import React, { FC } from 'react';
import styles from '../../styles/ErrorsComponent.module.css';

interface ErrorsComponentProps {
    message: string;
}

const ErrorsComponent: FC<ErrorsComponentProps> = ({message}) => {
    return <main className={styles.container}><h1>{message}</h1></main>
}

export default ErrorsComponent;
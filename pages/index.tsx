import React, {FC} from 'react';
import styles from '../styles/Home.module.css'
import { Product } from '../src/utils/types';
import { GetServerSideProps } from 'next';

export interface HomeProps {
  products: Product[];
}

const Home: FC<HomeProps> = ({products}) => {
  console.log(products)
  const productsCards = products.map(prod => <span key={prod.id}>{prod.title}</span>)
  return (
    <div className={styles.container}>
      { productsCards }
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://fakestoreapi.herokuapp.com/products?limit=10'); 
  const products = await response.json();
  return {
    props: {
      products,
    }
  }
}
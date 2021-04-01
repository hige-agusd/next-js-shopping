import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts, fetchRates } from '../store/actions';
import { AppDispatch, wrapper } from '../store/store';
import ProductsComponent from '../src/components/products';
import { State } from '../store/slices';

const ProductsPage: FC = () => {
    const {products} = useSelector(({products}: State ) => ({
        products: products.products,
    }))
    return <ProductsComponent products={products} />
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        await (store.dispatch as AppDispatch)(fetchProducts());
        await (store.dispatch as AppDispatch)(fetchRates() )
    }
);

export default ProductsPage;
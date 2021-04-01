import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Product } from '../../src/utils/types';
import ProductDetail from '../../src/components/product-detail';
import NotFound from '../not-found';
import { State } from '../../store/slices';

export interface ProductProps {
    products?: Product[];
}

const ProductPage: FC<ProductProps> = () => {
    const router = useRouter();
    const { id } = router.query;
    const {products} = useSelector(({products}: State ) => ({
        products: products.products,
    }))
    const product = products?.find(p => p.id === Number(id));

    if (!product) {
        return <NotFound />
    }

    return (
        <ProductDetail product={product} />
    )
}

export default ProductPage;


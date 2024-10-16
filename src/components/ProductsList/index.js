import React, { useEffect } from "react";
import { ProductsList } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IDLE } from "../../state/status";
import { fetchProducts } from "../../state/store.slice";
import Product from "../Product";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector (state => state.products.products);
    const status = useSelector(state => state.products.status);

    useEffect(() => {
        status === IDLE && dispatch(fetchProducts());
    }, [dispatch, status]);


    return(
        <>

            <ProductsList>
                {   
                    products && products.map(product => (
                        <Product 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    ))
                }
            </ProductsList>
        </>
    );
}

export default ProductList;
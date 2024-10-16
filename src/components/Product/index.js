import  { React } from "react";
import { AddProduct, ProductContainer, ProductImage, ProductPrice, ProductTitle } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../state/store.slice";

const Product = ({ title, image, price, id }) => {
    const cart = useSelector(state => state.products.cart)
    const dispatch = useDispatch();
    
    const handleAddToCart = (e) =>{
        e.preventDefault();
        const newProduct = {
            id: id,
            title: title,
            image: image,
            price: price,
        }
        dispatch(addProductToCart(newProduct));
        console.log(cart);
    }

    return(
    
        <ProductContainer>
            <ProductImage src={image} alt={title}/>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>$ {price}</ProductPrice>
            <AddProduct onClick={handleAddToCart}>Agregar</AddProduct>
        </ProductContainer>
    );
}

export default Product;
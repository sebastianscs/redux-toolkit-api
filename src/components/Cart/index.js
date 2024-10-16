import { React, useDispatch, useSelector } from "react-redux";
import { removeProductFromCart } from "../../state/store.slice";
import { CartContainer, DeleteIcon, DeleteIconContainer, ProductContainer, ProductImage, ProductPrice, ProductTitle } from "./styles";
import deleteIcon from "../../assets/x.svg";
const Cart = ({ cartVisible }) => {
    const cart = useSelector(state => state.products.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeProductFromCart(productId));
    }
    return(
            <CartContainer visible={cartVisible}>
                
                {cart && cart.map(product => (
                    <ProductContainer key={product.id}>
                        <ProductImage src={product.image} alt={product.image}/>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductPrice>${product.price}</ProductPrice>
                        <DeleteIconContainer>
                            <DeleteIcon onClick={() => handleRemoveFromCart(product.id)} src={deleteIcon}/>
                        </DeleteIconContainer>
                    </ProductContainer>
                ))}
            </CartContainer>
    );
}

export default Cart;
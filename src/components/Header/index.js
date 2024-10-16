import { IconCartContainer, HeaderContainer, HeaderLinks, IconCart, NavLinks } from "./styles";
import Cart from "../../assets/cart.svg";
const Header = ({ cartVisible, setCartVisible }) => {
    
    const handleCartClick = (e) => {
        setCartVisible(e.target.value);
    }
    
    return(
        <>
            <HeaderContainer>
                <NavLinks>
                    <HeaderLinks href="">Inicio</HeaderLinks>
                    <HeaderLinks href="">Productos</HeaderLinks>
                    <HeaderLinks href="">Contacto</HeaderLinks>
                </NavLinks>
                <IconCartContainer>
                    <IconCart src={Cart} alt={Cart} onClick={handleCartClick}/>
                </IconCartContainer>
            </HeaderContainer>
            
        </>
    )
}

export default Header;
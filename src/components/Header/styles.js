import styled from "styled-components";

const HeaderContainer = styled.header`
    width:100%;
    font-family:'Lexend', Arial, sans-serif;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:#FFF;
    padding:15px 10px;
    box-sizing:border-box;
    position:fixed;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
`;
const NavLinks = styled.nav`
    display:flex;
    align-items:center;
`;
const HeaderLinks = styled.a`
    font-size:1.5rem;
    text-decoration:none;
    font-weight:800;
    color:#000;
    padding:10px 10px;
    box-sizing:border-box;
`;

const IconCartContainer = styled.i`
    width:50px;
    padding:5px;
    box-sizing:border-box;
    cursor:pointer;
    transition: transform 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
`;
 const IconCart = styled.img`
    width:100%;
 `;

export {
    HeaderContainer,
    HeaderLinks,
    IconCart,
    NavLinks,
    IconCartContainer,
}
import styled from "styled-components";
import "reset-css";
const ProductContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing:border-box;
    padding:7px;
`;

const ProductTitle = styled.h2`
    font-size: 1rem;
    font-family: 'Lexend', Arial, sans-serif;
    font-weight: 600;
    padding: 10px;
    box-sizing:border-box;
    text-align:center;
`;
const ProductImage = styled.img`
    width:100%;
    height:250px;
    box-sizing:border-box;
    padding:5px;
`;

const AddProduct = styled.button`
    background-color:#C9A4A4;
    color:#FFF;
    border: none;
    border-radius:5px;
    padding:5px;
    box-sizing:border-box;

`;
const ProductPrice = styled.p`
    font-family: 'Lexend', Arial, sans-serif;
    font-weight: 500;
    font-size:.9rem;
    text-align:center;
    box-sizing: border-box;
    padding:0 0 5px 5px;
`;
export {
    ProductContainer,
    ProductTitle,
    ProductImage,
    AddProduct,
    ProductPrice,
}
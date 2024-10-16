import styled from "styled-components";

const CartContainer = styled.section`
    width: 500px;
    height: 93%;
    background-color: #FFF;
    padding: 20PX;
    box-sizing: border-box;
    position: fixed;
    right: 0;
    transition: all .25s ease;
    top: 72px;
    box-shadow: -19px -1px 22px -15px rgba(0, 0, 0, 0.30);
    overflow: auto;
    right: ${({ visible }) => (visible ? '0' : '-700px')};
    font-family:'Lexend', Arial, sans-serif;

    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
    }
    &::-webkit-scrollbar:vertical{
        width: 10px;
    }
`;
const ProductTitle = styled.h2`
    width:200px;
    text-align:center;
    font-weight:600;
    font-size:15px;
    padding:20px 0;
    box-sizing:border-box;
`;
const ProductContainer = styled.article`
    width: 100%;
    border-bottom: 1px solid #494949;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    gap:4px;
`;
const ProductImage = styled.img`
    width:72px;
    height:60px;
`;
const ProductPrice = styled.p`
    font-size:14px;
    font-weight:500;
`;
const DeleteIconContainer = styled.i`
    width:40px;
    height:40px;
    cursor:pointer;
`;
const DeleteIcon = styled.img`
        width:100%;
        height:100%;
`;
export {
    CartContainer,
    ProductContainer,
    ProductTitle,
    ProductImage,
    ProductPrice,
    DeleteIconContainer,
    DeleteIcon,
}
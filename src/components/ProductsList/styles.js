import styled from "styled-components";

const ProductsList = styled.article`
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    padding-top: 85px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    background-color:#F5F5F5;
`;

export {
    ProductsList,
}
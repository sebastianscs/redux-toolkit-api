import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { FAILED, IDLE, LOADING, SUCCEDED } from "./status";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
    return response.data.slice(0,20);
});

const productSlice = createSlice({
    name: 'products',

    initialState: {
        products: null,
        cart:[],
        status: IDLE,
    },
    reducers: {
        addProductToCart: (state, action) => {
            if (!state.cart.some(product => product.id === action.payload.id)) {
                state.cart.push(action.payload);
            }
        },
        removeProductFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                console.log(action)
                state.status = LOADING;

            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                console.log(action)
                state.products = action.payload;
                state.status = SUCCEDED;
                
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.log(action)
                state.status = FAILED;
            })
    }
});
export const { addProductToCart, removeProductFromCart } = productSlice.actions;
const { reducer: productsReducer } = productSlice;
export default productsReducer;


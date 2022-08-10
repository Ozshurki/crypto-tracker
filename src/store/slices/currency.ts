import {createSlice} from "@reduxjs/toolkit";

type sliceState = {
    currency: string,
    symbol: string
}

const initialState: sliceState = {
    currency: "usd",
    symbol: "$",
};


const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setCurrency(state, action) {
            const newCurrency = action.payload;

            state.currency = newCurrency.value;

            if(newCurrency.value === "usd") state.symbol = "$";
            else if(newCurrency.value === "ils") state.symbol = "₪";
        },
    }
});

export const currencyActions = currencySlice.actions;

export default currencySlice;
import {configureStore} from "@reduxjs/toolkit";
import currencySlice from "./slices/currency";


const store = configureStore({
    reducer: {currency: currencySlice.reducer}
});

export default store;
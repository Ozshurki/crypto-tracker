import {configureStore} from "@reduxjs/toolkit";
import currencySlice from "./slices/currency";
import themeSlice from "./slices/theme";


const store = configureStore({
    reducer: {currency: currencySlice.reducer, theme:themeSlice.reducer}
});

export default store;
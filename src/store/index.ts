import {configureStore} from "@reduxjs/toolkit";
import currencySlice from "./slices/currency";
import themeSlice from "./slices/theme";
import favoritesSlice from "./slices/favorites";


const store = configureStore({
    reducer: {currency: currencySlice.reducer, theme:themeSlice.reducer, favorites: favoritesSlice.reducer}
});

export default store;
import {createSlice} from "@reduxjs/toolkit";


type sliceState = {
    coins: string[];
    favoritesQty: number;
}

const initialState: sliceState = {
    coins: [],
    favoritesQty: 0
};


const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleCoinInFavorites(state, action) {
            const coin = action.payload;

            const coinIsExists = state.coins.find((id: string) => id === coin.id);

            // Delete if coin is already saved
            if (coinIsExists){
                state.coins = state.coins.filter((id:any) => id !== coin.id);
                state.favoritesQty--;
            }else{
                state.coins.push(coin.id);
                state.favoritesQty++;
            }
        },
    }
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;
import axios from "axios";

export const getCoinsList = async (currency:string) =>{
    try{
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false'`)
        return res.data;
    }catch (err){
        console.log(err);
    }
}

export const getTrendsCoins = async () => {
    try{
        const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        return res.data;
    } catch (err){
        console.log(err);
    }

};

export const getHistoricalData = async (id: string | undefined, days: number, currency:string) => {
    try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=${currency}&days=${days}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
import axios from "axios";


export const getTrendsCoins = async () =>{
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    return res.data;
}


export const getChartById = async (id:number)=>{

}

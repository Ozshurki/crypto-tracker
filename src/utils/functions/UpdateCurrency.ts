export const updateCurrency = (currency:string, price:number) => {

    if(currency === "usd")
        return Number(price).toFixed(6);
    else if(currency === "ils")
        return (Number(price)*3).toFixed(6);
}
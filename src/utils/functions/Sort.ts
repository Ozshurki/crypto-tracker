export const sort = (sortKind:number, coins:any[]) =>{

    let sortedCoins:any[] = [...coins];

    switch (sortKind){
        case 1:
            return  sortedCoins.sort((a:any,b:any):number => {
                return (b?.current_price - a?.current_price);
            })
        case 2:
            return  sortedCoins.sort((a:any,b:any):number => {
                return (a?.current_price - b?.current_price);
            })
        case 3:
            return  sortedCoins.sort((a:any,b:any):number => {
                return (b?.market_cap - a?.market_cap);
            })
        case 4:
            return  sortedCoins.sort((a:any,b:any):number => {
                return (a?.market_cap - b?.market_cap);
            })
    }

    return sortedCoins;
}
export const sort = (sortKind:number, coins:any[]) =>{

    let sortedCoins:any[];

    switch (sortKind){
        case 1:
            sortedCoins = coins.sort((a:any,b:any):number => {
                return (b?.current_price - a?.current_price);
            })
            return sortedCoins;
        case 2:
            console.log(coins)
            break;
        case 3:
            console.log(coins)
            break;
        case 4:
            console.log(coins)
            break;
    }


}
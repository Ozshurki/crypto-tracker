const useDebounce = () =>{

    let timer:NodeJS.Timer;

    return function debounce(func:() => void, delay:number){

        if(timer)
            clearTimeout(timer);

        timer = setTimeout(() => func(), delay);
    }
}

export default useDebounce
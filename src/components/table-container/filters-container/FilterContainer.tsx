import React, {useState} from "react";
import {MdOutlineSort} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {FilterContainerS} from "./FilterContainer.Style";
import {useSelector} from "react-redux";

interface FilterContainerInt {
    coin: string;
    setCoin: (coin: string) => void;
    setSortKind: (sortKind:number) => void;
}

const FilterContainer: React.FC<FilterContainerInt> = ({coin, setCoin, setSortKind}) => {

    const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
    const isDarkTheme = useSelector((state: any) => state.theme.isDarkTheme);

    const choseSortKind = (sortKind:number) =>{
        setSortKind(sortKind);
        setFilterIsOpen(!filterIsOpen);
    }

    return (
        <FilterContainerS filterIsOpen={filterIsOpen}>
            <input type="text"
                   name="text"
                   autoComplete="off"
                   value={coin}
                   required
                   onChange={(event: React.FormEvent<HTMLInputElement>) => setCoin(event.currentTarget.value)}/>
            <label htmlFor="text" className="label-name">
                <span className="content-name">Search</span>
            </label>
                <div className="sort-icon" onClick={() => setFilterIsOpen(!filterIsOpen)}>
                    { filterIsOpen ? <AiOutlineClose size="1.4rem" color={isDarkTheme ? "white" : "black"}/>
                        : <MdOutlineSort size="1.4rem" color={isDarkTheme ? "white" : "black"}/>
                    }
                </div>
            <div className="filters">
                <div onClick={() => choseSortKind(1)}>Price: High to Low</div>
                <div onClick={() => choseSortKind(2)}>Price: Low to High</div>
                <div onClick={() => choseSortKind(3)}>Market Cap: High to Low</div>
                <div onClick={() => choseSortKind(4)}>Market Cap: Low to High</div>
            </div>
        </FilterContainerS>
    );
};

export default FilterContainer;
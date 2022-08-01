import React from "react";
import {FilterContainerStyle} from "./FilterContainer.Style";
import {MdOutlineSort} from "react-icons/md";


interface FilterContainerInt {
    coin: string;
    setCoin: (coin: string) => void;
}

const FilterContainer: React.FC<FilterContainerInt> = ({coin, setCoin}) => {

    return (
        <FilterContainerStyle>
            <input type="text"
                   name="text"
                   autoComplete="off"
                   required
                   value={coin}
                   onChange={(event: React.FormEvent<HTMLInputElement>) => setCoin(event.currentTarget.value)}/>
            <label htmlFor="text" className="label-name">
                        <span className="content-name">
                            Search
                        </span>
            </label>
            <div className="sort-icon">
                <MdOutlineSort size="1.4rem" color="black"/>
            </div>
        </FilterContainerStyle>
    );
};

export default FilterContainer;
import React, {useState} from "react";
import {MdOutlineSort} from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai";
import {FilterContainerS} from "./FilterContainerS";

interface FilterContainerInt {
    coin: string;
    setCoin: (coin: string) => void;
}

const FilterContainer: React.FC<FilterContainerInt> = ({coin, setCoin}) => {

    const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

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
                    { filterIsOpen ? <AiOutlineClose size="1.4rem" color="black"/>
                        : <MdOutlineSort size="1.4rem" color="#7510F7"/>
                    }
                </div>
            <div className="filters">

            </div>
        </FilterContainerS>
    );
};

export default FilterContainer;
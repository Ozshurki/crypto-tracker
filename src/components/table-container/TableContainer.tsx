import React, {useState} from "react";

import {TableContainerStyle} from "./TableContainer.Style";
import Table from "./table/Table";
import FilterContainer from "./filters-container/FilterContainer";


const TableContainer:React.FC = () => {

    const [coin, setCoin] = useState("");

    return(
        <TableContainerStyle>
            <FilterContainer coin={coin}
            setCoin={(coin:string) => setCoin(coin)}/>
            <Table/>
        </TableContainerStyle>
    )
}

export default TableContainer;
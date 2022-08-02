import React, {useState} from "react";

import FilterContainer from "./filters-container/FilterContainer";
import {TableContainerStyle} from "./TableContainer.Style";
import Table from "./table/Table";

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
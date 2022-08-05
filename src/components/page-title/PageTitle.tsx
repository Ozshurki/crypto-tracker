import React from "react";

import {PageTitleS} from "./PageTitleS";

interface PageTileInt{
    title:string
}

const PageTitle:React.FC<PageTileInt>= ({title}) =>{
    return(
        <PageTitleS>
            {title}
        </PageTitleS>
    )
}

export default PageTitle;
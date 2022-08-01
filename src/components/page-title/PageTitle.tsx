import React from "react";

import {PageTitleStyle} from "./PageTitle.Style";

interface PageTileInt{
    title:string
}

const PageTitle:React.FC<PageTileInt>= ({title}) =>{
    return(
        <PageTitleStyle>
            {title}
        </PageTitleStyle>
    )
}

export default PageTitle;
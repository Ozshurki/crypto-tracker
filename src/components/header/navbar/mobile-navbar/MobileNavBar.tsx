import React, {useState} from "react";

import MobileNavBarStyle from "./MobileNavBar.Style"
import NavLinks from "../nav-links/NavLinks";

interface Props {
    closeMobileMenu: () => void;
}

const MobileNavBar: React.FC<Props> = ({closeMobileMenu}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    setTimeout(() => {
        setIsOpen(true);
    }, 0);

    return (
        <MobileNavBarStyle isOpen={isOpen}>
            <NavLinks isMobile={true}
                      closeMobileMenu={closeMobileMenu}/>
        </MobileNavBarStyle>
    );
};

export default MobileNavBar;
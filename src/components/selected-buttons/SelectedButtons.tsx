import React from "react";
import {SelectedButtonsS} from "./SelectedButtons.Style";

interface Props {
    children?: React.ReactNode;
    onClickHandler: () => void;
    selected: boolean;
}

const SelectedButtons: React.FC<Props> = ({children, onClickHandler, selected}) => {
    return (
        <SelectedButtonsS onClick={onClickHandler} selected={selected}>
            {children}
        </SelectedButtonsS>
    );
};

export default SelectedButtons;
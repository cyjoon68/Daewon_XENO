import React from "react";
import { Button } from "@heroui/button";
import { ButtonSharedType } from "../types/ButtonShared.type";

const ButtonShared = ({ children, disableHover, ...props }: ButtonSharedType) => {
    return (
        <Button data-hover={!disableHover} {...props}>{children}</Button>
    );
};

export default ButtonShared;

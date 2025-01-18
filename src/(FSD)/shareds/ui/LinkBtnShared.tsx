import React from "react";
import Link from "next/link";
import { ButtonSharedType } from "../types/ButtonShared.type";
import ButtonShared from "./ButtonShared";

interface LinkBtnSharedProps extends ButtonSharedType {
    href: string;
};

const LinkBtnShared = ({ href, children, variant, disableHover, ...props } : LinkBtnSharedProps) => {
    return (
        <ButtonShared disableHover={disableHover} variant={variant || "light"} data-slot={"link"} href={href} as={Link} {...props}>{ children }</ButtonShared>
    );
};

export default LinkBtnShared;

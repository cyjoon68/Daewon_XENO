import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import { ButtonSharedType } from "../types/ButtonShared.type";

interface LinkBtnSharedProps extends ButtonSharedType {
    href: string;
};

const LinkBtnShared = ({ href, children, variant, disableHover, ...props } : LinkBtnSharedProps) => {
    return (
        <Button data-hover={disableHover} variant={variant || "light"} data-slot={"link"} href={href} as={Link} {...props}>{ children }</Button>
    );
};

export default LinkBtnShared;

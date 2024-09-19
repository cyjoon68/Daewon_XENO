import { Button, ButtonProps } from "@nextui-org/button";
import React from "react";
import IconShared from "./IconShared";
import { IconType } from "../types/Icon.type";
import Link from "next/link";

interface IconBtnSharedProps extends ButtonProps {
    iconProps: IconType;
    href?: string;
};

const IconBtnShared = ({ size = "sm", iconProps, href, ...props }: IconBtnSharedProps) => {
    return (
        <Button size={size} isIconOnly variant={"light"} {...props} href={href} as={href ? Link : undefined}>
            <IconShared iconType={iconProps.iconType} className={iconProps.className} iconSize={iconProps.iconSize} />
        </Button>
    );
};

export default IconBtnShared;
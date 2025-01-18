import React from "react";
import IconShared from "./IconShared";
import { IconType } from "../types/Icon.type";
import Link from "next/link";
import ButtonShared from "./ButtonShared";
import { ButtonSharedType } from "../types/ButtonShared.type";

interface IconBtnSharedProps extends ButtonSharedType {
    iconProps: IconType;
    href?: string;
};

const IconBtnShared = ({ disableHover = true, disableAnimation = true, disableRipple = true,size = "sm", iconProps, href, ...props }: IconBtnSharedProps) => {
    return (
        <ButtonShared disableHover={disableHover} disableAnimation={disableAnimation} disableRipple={disableRipple} size={size} isIconOnly variant={"light"} {...props} href={href} as={href ? Link : undefined}>
            <IconShared iconType={iconProps.iconType} className={iconProps.className} iconSize={iconProps.iconSize} />
        </ButtonShared>
    );
};

export default IconBtnShared;

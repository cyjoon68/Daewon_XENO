"use client";

import React from "react";
import styles from "@/(FSD)/shareds/styles/ComponentStyle.module.scss";
import IconBtnShared from "./IconBtnShared";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import { useRouter } from "next/navigation";

interface MenuButtonSharedProps {
    children: React.ReactNode;
    href?: string;
}

const MenuButtonShared = ({ href, children }: MenuButtonSharedProps) => {
    const router = useRouter();

    return (
        <div onClick={_ => {
            if (href) router.push(href);
        }} className={styles.menu_button}>
            <AppInner>
                <div className={styles.button_inner}>
                    {children}
                    <IconBtnShared iconProps={{ iconType: "right", className: "text-default-400", iconSize: "sm" }} />
                </div>
            </AppInner>
        </div>
    );
};

export default MenuButtonShared;
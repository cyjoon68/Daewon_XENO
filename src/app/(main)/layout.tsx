import CartProductBtn from "@/(FSD)/entities/cart/ui/CartProductBtn";
import LogoShared from "@/(FSD)/shareds/ui/LogoShared";
import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppNav from "@/(FSD)/widgets/app/ui/AppNav";
import React from "react";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<LogoShared />}
                    rightContent={<CartProductBtn />}
                />
            </AppFixedTopBar>
            {children}
            <AppFixedBtmBar>
                <AppNav />
            </AppFixedBtmBar>
        </>
    );
};

export default Layout;
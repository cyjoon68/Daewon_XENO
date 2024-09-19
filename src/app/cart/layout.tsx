import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";
import IconBtnShared from "@/(FSD)/shareds/ui/IconBtnShared";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import CartBtnBar from "@/(FSD)/widgets/cart/ui/CartBtnBar";
import React from "react";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<>
                        <BackBtnShared />
                        <TextMediumShared fontWeight={"semibold"}>장바구니</TextMediumShared>
                    </>}
                    rightContent={<IconBtnShared href={"/"} iconProps={{ iconType: "home" }} />}
                />
            </AppFixedTopBar>
            {children}
            <AppFixedBtmBar>
                <CartBtnBar />
            </AppFixedBtmBar>
        </>
    );
};

export default Layout;
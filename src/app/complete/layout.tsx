import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppNav from "@/(FSD)/widgets/app/ui/AppNav";
import React from "react";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <>
            <AppFixedTopBar>
                s
            </AppFixedTopBar>
            {children}
            <AppFixedBtmBar>
                <AppNav />
            </AppFixedBtmBar>
        </>
    );
};

export default Layout;
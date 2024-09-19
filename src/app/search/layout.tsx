import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import AppNav from "@/(FSD)/widgets/app/ui/AppNav";
import React from "react";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <AppFixedBtmBar>
                <AppNav />
            </AppFixedBtmBar>
        </>
    );
};

export default Layout;
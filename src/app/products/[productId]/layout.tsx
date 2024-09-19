import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";
import IconBtnShared from "@/(FSD)/shareds/ui/IconBtnShared";
import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import ProductOrderBar from "@/(FSD)/widgets/product/ui/ProductOrderBar";

const Layout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    defaultCartButton
                    leftContent={<BackBtnShared />}
                    rightContent={<>
                        <IconBtnShared href={"/"} iconProps={{ iconType: "home" }} />
                        <IconBtnShared href={"/"} iconProps={{ iconType: "search" }} />
                    </>}
                />
            </AppFixedTopBar>
            {children}
            <AppFixedBtmBar>
                <ProductOrderBar />
            </AppFixedBtmBar>
        </>
    );
};

export default Layout;
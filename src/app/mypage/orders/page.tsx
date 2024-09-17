import React from "react";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import OrderInfoList from "@/(FSD)/widgets/order/ui/OrderInfoList";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<>
                        <BackBtnShared />
                        <TextMediumShared fontWeight={"semibold"}>주문 내역</TextMediumShared>
                    </>}
                />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <OrderInfoList />
                </AppInner>
            </AppSection>
        </>
    );
};

export default Page;

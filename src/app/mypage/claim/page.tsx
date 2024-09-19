import React from "react";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import OrderRefundInfoList from "@/(FSD)/widgets/order/ui/OrderRefundInfoList";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<>
                        <BackBtnShared />
                        <TextMediumShared fontWeight={"semibold"}>환불 내역</TextMediumShared>
                    </>}
                />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <OrderRefundInfoList />
                </AppInner>
            </AppSection>
        </>
    );
};

export default Page;

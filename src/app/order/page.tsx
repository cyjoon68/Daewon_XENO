import React from "react";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import OrderProductInfoList from "@/(FSD)/widgets/order/ui/OrderProductInfoList";
import OrderDeliveryContainer from "@/(FSD)/widgets/order/ui/OrderDeliveryContainer";
import AppFixedBtmBar from "@/(FSD)/widgets/app/ui/AppFixedBtmBar";
import OrderBtnBar from "@/(FSD)/widgets/order/ui/OrderBtnBar";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
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
                        <TextMediumShared fontWeight={"semibold"}>결제하기</TextMediumShared>
                    </>}
                />
            </AppFixedTopBar>
            <AppSection isBgColor={true}>
                <OrderDeliveryContainer />
                <OrderProductInfoList />
            </AppSection>
            <AppFixedBtmBar>
                <OrderBtnBar />
            </AppFixedBtmBar>
        </>
    );
};

export default Page;
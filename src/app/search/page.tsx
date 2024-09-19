import ProductSearchForm from "@/(FSD)/features/product/ui/ProductSearchForm";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import React from "react";
import { Metadata } from "next";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import CartProductBtn from "@/(FSD)/entities/cart/ui/CartProductBtn";

export const metadata: Metadata = {
    title: "XENO - 키워드 검색",
}

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<>
                        <BackBtnShared />
                        <TextMediumShared fontWeight={"semibold"}>검색하기</TextMediumShared>
                    </>}
                    rightContent={<CartProductBtn />}
                />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <ProductSearchForm />
                </AppInner>
            </AppSection>
        </>
    );
};

export default Page;
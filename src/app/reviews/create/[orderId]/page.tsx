import ReviewCreateForm from "@/(FSD)/features/review/ui/ReviewCreateForm";
import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";
import TextLargeShared from "@/(FSD)/shareds/ui/TextLargeShared";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import React from "react";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<BackBtnShared />}
                    centerContent={<TextLargeShared>리뷰 작성하기</TextLargeShared>}
                />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <ReviewCreateForm />
                </AppInner>
            </AppSection>
        </>
    )
}

export default Page;
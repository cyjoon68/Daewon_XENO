import BackBtnShared from "@/(FSD)/shareds/ui/BackBtnShared";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import ReviewInfoContainer from "@/(FSD)/widgets/review/ui/ReviewInfoContainer";
import React from "react";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader
                    leftContent={<BackBtnShared />}
                    centerContent={<></>}
                />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <ReviewInfoContainer />
                </AppInner>
            </AppSection>
        </>
    );
};

export default Page;
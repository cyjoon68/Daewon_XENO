import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import ReviewCardList from "@/(FSD)/widgets/review/ui/ReviewCardList";
import React from "react";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader defaultCartButton leftContent={<TextMediumShared fontWeight={"semibold"}>리뷰</TextMediumShared>} />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <ReviewCardList />
                </AppInner>
            </AppSection>
        </>
    );
};

export default Page;
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import MyPageInfoContainer from "@/(FSD)/widgets/my/MyPageInfoContainer";
import React from "react";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader defaultCartButton leftContent={<TextMediumShared fontWeight={"semibold"}>마이</TextMediumShared>} />
            </AppFixedTopBar>
            <AppSection>
                <MyPageInfoContainer />
            </AppSection>
        </>
    );
};

export default Page;
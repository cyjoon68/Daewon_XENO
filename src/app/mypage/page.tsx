import { userReadData } from "@/(FSD)/entities/user/model/userReadData";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import MyContainer from "@/(FSD)/widgets/my/ui/MyContainer";
import React from "react";

const Page = async () => {
    const user = await userReadData();

    return (
        <>
            <AppFixedTopBar>
                <AppHeader defaultCartButton leftContent={<TextMediumShared fontWeight={"semibold"}>마이</TextMediumShared>} />
            </AppFixedTopBar>
            <AppSection isBgColor>
                <MyContainer user={user} />
            </AppSection>
        </>
    );
};

export default Page;

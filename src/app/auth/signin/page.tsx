import React from "react";
import AppFixedTopBar from "@/(FSD)/widgets/app/ui/AppFixedTopBar";
import AppHeader from "@/(FSD)/widgets/app/ui/AppHeader";
import TextLargeShared from "@/(FSD)/shareds/ui/TextLargeShared";
import AppSection from "@/(FSD)/widgets/app/ui/AppSection";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import AuthSigninForm from "@/(FSD)/features/auth/ui/AuthSigninForm";

const Page = () => {
    return (
        <>
            <AppFixedTopBar>
                <AppHeader centerContent={<TextLargeShared fontWeight={"semibold"}>로그인</TextLargeShared>} />
            </AppFixedTopBar>
            <AppSection>
                <AppInner>
                    <AuthSigninForm />
                </AppInner>
            </AppSection>
        </>
    );
};

export default Page;
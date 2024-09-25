"use client";

import { useUserRead } from "@/(FSD)/entities/user/api/useUserRead";
import UserProfileBox from "@/(FSD)/entities/user/ui/UserProfileBox";
import { UserType } from "@/(FSD)/shareds/types/user/User.type";
import { useDisclosure } from "@nextui-org/modal";
import React from "react";
import AppLoadingModal from "../../app/ui/AppLoadingModal";
import styles from "@/(FSD)/shareds/styles/MyStyle.module.scss";
import AppContainer from "../../app/ui/AppContainer";
import AppInner from "../../app/ui/AppInner";
import TextLargeShared from "@/(FSD)/shareds/ui/TextLargeShared";
import LinkBtnShared from "@/(FSD)/shareds/ui/LinkBtnShared";
import MyMenuList from "./MyMenuList";

const MyContainer = () => {
    const { data, isPending } = useUserRead();

    const user: UserType = data;
    const { isOpen: isLoadingModalOpen, onOpenChange: onLoadingModalOpenChange } = useDisclosure();

    return (
        <>
            <div className={styles.my_container}>
                {user && <UserProfileBox user={user} />}
                {
                    !user &&
                    <div className={styles.unaccount_box}>
                        <AppContainer>
                            <AppInner>
                                <div className={styles.box_inner}>
                                    <TextLargeShared>로그인이 필요해요.</TextLargeShared>
                                    <div>
                                        <LinkBtnShared href={"/auth/signin"} size={"sm"} variant={"bordered"}>로그인/회원가입하기</LinkBtnShared>
                                    </div>
                                </div>
                            </AppInner>
                        </AppContainer>
                    </div>
                }
                <MyMenuList />
            </div>
            <AppLoadingModal isDetect={isPending} isOpen={isLoadingModalOpen} onOpenChange={onLoadingModalOpenChange} />
        </>
    );
};

export default MyContainer;
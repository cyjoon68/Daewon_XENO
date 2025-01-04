import { UserType } from "@/(FSD)/shareds/types/user/User.type";
import React from "react";
import styles from "@/(FSD)/shareds/styles/UserStyle.module.scss";
import AppContainer from "@/(FSD)/widgets/app/ui/AppContainer";
import AppInner from "@/(FSD)/widgets/app/ui/AppInner";
import TextMediumShared from "@/(FSD)/shareds/ui/TextMediumShared";
import LinkBtnShared from "@/(FSD)/shareds/ui/LinkBtnShared";

interface UserProfileBoxProps {
    user: UserType;
}

const UserProfileBox = ({ user }: UserProfileBoxProps) => {
    return (
        <div className={styles.user_profile_box}>
            <AppContainer>
                <AppInner>
                    <div className={styles.box_inner}>
                        <div className={styles.profile_text}>
                            <TextMediumShared>{user.name}님 안녕하세요!</TextMediumShared>
                        </div>
                        <LinkBtnShared href={"/"} size={"sm"} variant={"bordered"}>프로필 수정</LinkBtnShared>
                    </div>
                </AppInner>
            </AppContainer>
        </div>
    );
};

export default UserProfileBox;
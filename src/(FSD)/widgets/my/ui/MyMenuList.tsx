import styles from "@/(FSD)/shareds/styles/MyStyle.module.scss";
import MenuButtonShared from "@/(FSD)/shareds/ui/MenuButtonShared";
import React from "react";
import AppContainer from "../../app/ui/AppContainer";
import TextSmallShared from "@/(FSD)/shareds/ui/TextSmallShared";

const MyMenuList = () => {
    return (
        <div className={styles.menu_list}>
            <AppContainer>
                <MenuButtonShared href={"/mypage/orders"}><TextSmallShared fontWeight={"semibold"}>주문 내역</TextSmallShared></MenuButtonShared>
                <MenuButtonShared href={"/mypage/claims"}><TextSmallShared fontWeight={"semibold"}>환불 내역</TextSmallShared></MenuButtonShared>
            </AppContainer>
        </div>
    );
};

export default MyMenuList;
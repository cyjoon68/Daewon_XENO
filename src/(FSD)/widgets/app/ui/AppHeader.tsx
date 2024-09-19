import React from "react";
import AppContainer from "./AppContainer";
import AppInner from "./AppInner";
import styles from "@/(FSD)/shareds/styles/AppStyle.module.scss";

interface AppHeaderProps {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    centerContent?: React.ReactNode;
}

const AppHeader = ({ leftContent, centerContent, rightContent } : AppHeaderProps) => {
    return (
        <header className={`border-default-100 border-b-small ${styles.header}`}>
            <AppContainer>
                <AppInner>
                    <div className={styles.header_inner}>
                        {leftContent && <div className={styles.left_content}>{leftContent}</div>}
                        {centerContent && <div className={styles.center_content}>{centerContent}</div>}
                        {rightContent && <div className={styles.right_content}>{rightContent}</div>}
                    </div>
                </AppInner>
            </AppContainer>
        </header>
    );
};

export default AppHeader;
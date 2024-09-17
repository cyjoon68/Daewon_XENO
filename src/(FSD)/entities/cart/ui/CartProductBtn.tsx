import IconBtnShared from "@/(FSD)/shareds/ui/IconBtnShared";
import React from "react";

interface CartProductBtnProps {

}

const CartProductBtn = ({ }: CartProductBtnProps) => {
    return (
        <IconBtnShared href={"/cart"} iconProps={{ iconType: "cart" }} />
    );
};

export default CartProductBtn;
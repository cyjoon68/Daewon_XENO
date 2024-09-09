"use client";

import IconShared from "@/(FSD)/shareds/ui/IconShared";
import { Button } from "@nextui-org/button";
import React from "react";
import styles from "@/(FSD)/shareds/styles/ProductStyle.module.scss";
import TextSmallShared from "@/(FSD)/shareds/ui/TextSmallShared";
import { useProductLikeToggle } from "../api/useProductLikeToggle";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/navigation";


interface ProductLikeBtnType {
    productId: number;
    isLike?: boolean;
    isIndex?: boolean;
    index?: number;
    size?: "lg" | "md" | "sm"
    parentRefetch?: any;
}

const ProductLikeBtn = ({ productId, isLike = true, size = "sm", isIndex = false, index, parentRefetch }: ProductLikeBtnType) => {
    const router = useRouter();
    const onSuccess = (data: any) => {
        if (parentRefetch) {
            parentRefetch();
        }
    }
    
    const { mutate } = useProductLikeToggle({ onSuccess });

    const like = () => {
        mutate(productId);
    }

    return (
        <>
            <Button className={`${styles.like_btn} ${isIndex ? styles.index_btn : ""} ${isLike && styles.active}`}
                variant={"light"} size={size} isIconOnly={!isIndex} onClick={like}>
                <IconShared iconType={"like_active"} iconSize={"sm"} />
                <TextSmallShared>{index}</TextSmallShared>
            </Button>
        </>
    )
}

export default ProductLikeBtn;
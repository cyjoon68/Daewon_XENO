"use client";

import { useEffect, useState } from "react";

import style from "@/(FSD)/shareds/styles/ProductStyle.module.scss";
import { Button } from "@nextui-org/button";


interface ProductDetailImageProps {
    productDetailImage: string;
}

const ProductDetailImage = ({ productDetailImage }: ProductDetailImageProps) => {
    const [size, setSize] = useState(2);
    const [isOpen, setIsOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleLoadMore = () => {
        if (!isOpen) {
            setIsOpen(true);
            if (!loaded) {
                setSize(0);
                setLoaded(true);
            }
        } else {
            setIsOpen(false);
            setSize(2);
            setLoaded(false);
        }
    };

    return (
        <div>
            <div className={`${style.product_detail_images_list} ${isOpen ? style.expanded : style.collapsed}`}>
              
                    <div className={style.image_block} >
                        <img
                            src={productDetailImage}
                            alt={'상세이미지'}
                            className={style.detail_image}
                        />
                    </div>
          
            </div>
            <div className={style.gradient_overlay_block}>
                {!isOpen && <div className={style.gradient_overlay}></div>}
            </div>
            <div className={style.product_load_more}>
                <Button className={style.load_more_button} onClick={handleLoadMore}>
                    {isOpen ? "접기" : "더 보기"}
                </Button>
            </div>
            <div className={style.block} />
        </div>
    );
};

export default ProductDetailImage;
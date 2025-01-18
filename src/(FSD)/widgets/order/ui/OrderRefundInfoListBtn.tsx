"use client"

import { Button } from "@heroui/button";

const OrderRefundInfoListBtn = () => {

    return (
        <div style={{ marginBottom: "10px" }}>
            <Button onClick={() => {
                window.location.href = "/mypage/claims";
            }} size={"sm"} className="w-full h-[100px] bg-white border-2" radius="none" >환불 내역 확인하기</Button>

        </div>
    );
};

export default OrderRefundInfoListBtn;
"use client";

import { useRouter } from "next/navigation";
import React from "react";
import IconBtnShared from "./IconBtnShared";

const BackBtnShared = () => {
    const router = useRouter();

    return (
        <IconBtnShared onClick={_ => router.back()} iconProps={{ iconType: "left" }} />
    )
}

export default BackBtnShared;
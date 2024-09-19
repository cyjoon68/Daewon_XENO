"use client";

import { API_URL } from "@/(FSD)/shareds/paths/path";
import { useQuery } from "@tanstack/react-query";

const userReadFetch = async () => {
    const accessToken = localStorage.getItem("access_token")!;

    const response = await fetch(`${API_URL}/api/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
    });

    if (!accessToken) {
        return null;
    }

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    };

    const data = await response.json();

    return data;
}
export const useUserRead = () => {
    return useQuery({
        queryKey: ["user_read"],
        queryFn: () => userReadFetch(),
    });
};

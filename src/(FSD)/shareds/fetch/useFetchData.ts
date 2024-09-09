"use client";

import { FetchType } from "../types/FetchData.type";
import { apiPath } from "./APIpath";

const useFetchData = () => {
    let accessToken = null;
    
    if (typeof window !== "undefined") {
        accessToken = localStorage.getItem("access_token");
    }

    const fetchData = async ({ path, method = "GET", contentType = "application/json", isAuthRequired = false, isNotAuthRequired = false, body }: FetchType) => {
        let response = null;
        
        if ((!isNotAuthRequired) || (isAuthRequired)) {
            response = await fetch(`${apiPath}/api${path}`, {
                method: method,
                headers: {
                    "Content-Type": contentType,
                    "Authorization": `Bearer ${accessToken}`,
                },
                body: JSON.stringify(body)
            });
        } else {
            response = await fetch(`${apiPath}${path}`, {
                method: method,
                headers: {
                    "Content-Type": contentType,
                },
                body: JSON.stringify(body)
            });
        }

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        const data = await response.json();
        
        return data;
    };

    return fetchData;
};

export default useFetchData;
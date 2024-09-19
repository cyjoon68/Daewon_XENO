import useFetchData from "@/(FSD)/shareds/fetchs/useFetchData";
import { useQuery } from "@tanstack/react-query";

export const usePrdouctListAllRead = () => {
    const fetchData = useFetchData();

    return useQuery({
        queryKey: ["product_read_all"],
        queryFn: () => fetchData({
            path: `/product/read/all`,
        }),
    });
};
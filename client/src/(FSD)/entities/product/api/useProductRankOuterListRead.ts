import useFetchData from "@/(FSD)/shareds/fetch/useFetchData";
import { useQuery } from "@tanstack/react-query";

export const useProductRankOuterListRead = () => {
    const fetchData = useFetchData();

    return useQuery({
        queryKey: ["product_rank_outer_list_read"],
        queryFn: () => fetchData({
            path: "/product/rank/하의",
        }),
    });
};
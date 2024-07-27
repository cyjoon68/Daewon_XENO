import useFetchData from "@/(FSD)/shareds/fetch/useFetchData";
import { useQuery } from "@tanstack/react-query";

interface useProductRankListReadType {
    type: "상의" | "하의" | "아우터";
}

export const useProductRankListRead = ({ type = "상의" }: useProductRankListReadType) => {
    const fetchData = useFetchData();

    return useQuery({
        queryKey: ["product_rank_list_read", type],
        queryFn: () => fetchData({
            path: `/product/rank/${type}`,
        }),
    });
};
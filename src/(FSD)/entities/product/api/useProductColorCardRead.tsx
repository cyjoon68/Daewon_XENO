import useFetchData from "@/(FSD)/shareds/fetch/useFetchData";
import { useQuery } from "@tanstack/react-query";

export const useProductColorCardRead = (productId: number) => {
    const fetchData = useFetchData();

    return useQuery({
        queryKey: ["product_card_read", productId],
        queryFn: () => fetchData({
            path: `/product/color/read/info?productId=${productId}`,
        }),
    });
};
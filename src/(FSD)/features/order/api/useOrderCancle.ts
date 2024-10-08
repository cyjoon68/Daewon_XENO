import { useMutation } from "@tanstack/react-query";

import { MutationType } from "../../types/mutation.type";
import useFetchData from "@/(FSD)/shareds/fetchs/useFetchData";


interface OrderCancelDTO {
    orderId: number;
    reason: string;
}


export const useOrderCancle = ({ onSuccess, onError }: MutationType) => {

    const fetchData = useFetchData();

    return useMutation({
        mutationFn: (data:OrderCancelDTO) => {
            return fetchData({
                path: "/orders/cancel",
                method: "PUT",
                body: data,
                isAuthRequired: true
            });
        },
        onSuccess: (data:any) => {
            console.log(data)
            onSuccess(data);
        },
        onError: () => {
            if (onError) {
                onError();
            }
        }
    });
};

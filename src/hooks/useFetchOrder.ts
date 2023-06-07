import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";
import Order from "../types/Order";

export default function useFetchOrder(orderId: string) {
    const [order, setOrder] = useState({} as Order);

    const fetchOrder = async () => {
        const url = `http://localhost:3000/orders/${orderId}`
        const res = await window.fetch(url);
        const { order } = await res.json();

        setOrder(order);
    }

    useEffectOnce(() => {
        fetchOrder();
    })

    return order;
}
import useFetchOrder from "../../hooks/useFetchOrder";
import Menu from "./Menu";
import Message from "./Message";

type OrderProps = {
    orderId: string;
    onClickBack: () => void;
}

export default function Order(
    { orderId, onClickBack }: OrderProps
) {
    const order = useFetchOrder(orderId);

    return (
        <>
            <img src="images/complete.png" />
            <Message order={order} />
            {
                Object.keys(order).length ? (
                    <Menu order={order} />
                ) : null
            }
            <button
                type="button"
                onClick={onClickBack}>메인화면으로 돌아가기</button>
        </>
    )
}
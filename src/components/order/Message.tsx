import Order from "../../types/Order"

type MessageProps = {
    order: Order;
}

export default function Message({ order }: MessageProps) {
    const isEmptyOrder = !!(Object.keys(order).length);

    return (
        <>
            {isEmptyOrder ? (
                <div>
                    <h1>주문이 완료되었습니다!</h1>
                    <p>주문번호 {order.id}</p>
                </div>
            ) : (
                <h1>주문을 진행해주세요!</h1>
            )}
            <hr />
        </>
    )
}
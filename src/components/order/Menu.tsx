import Order from "../../types/Order"

type MenuProps = {
    order: Order;
}

export default function Menu({ order }: MenuProps) {
    const { menu, totalPrice } = order;

    return (
        <div>
            <h3>주문목록</h3>
            <ul>
                {
                    menu.map((food, index) => (
                        <li key={`${index}-${food.id}`}>
                            <span>{food.name} </span>
                            <span>{food.price.toLocaleString()}원</span>
                        </li>
                    ))
                }
            </ul>
            <div>
                <span>총 가격 </span>
                <span>{totalPrice.toLocaleString()}원</span>
            </div>
        </div >
    )
}
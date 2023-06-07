import Food from "../../types/Food"

type SummaryProps = {
    menu: Food[];
}

export default function Summary({ menu }: SummaryProps) {

    const totalPrice = menu.reduce((acc, food) => acc + food.price, 0);

    return (
        <>
            <div>
                <img src="images/shopping-cart.png" />
                <h3>주문내역 </h3>
                <p>{menu.length}개</p>
            </div>
            <div>
                <span>총 결제 예상금액 </span>
                <span>{totalPrice.toLocaleString()}원</span>
            </div>
        </>
    )
}
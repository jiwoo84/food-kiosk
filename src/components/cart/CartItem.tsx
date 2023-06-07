import Food from "../../types/Food"

type CartItemProps = {
    food: Food;
    index: number;
    onClickRemove: (index: number) => void;
}

export default function CartItem({
    food, index, onClickRemove }: CartItemProps) {
    const { name, price } = food;
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{price.toLocaleString()}원</p>
                <button
                    type="button"
                    onClick={() => onClickRemove(index)}
                >X</button>
            </div>
        </>
    )
}
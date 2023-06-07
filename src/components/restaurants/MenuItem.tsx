import Food from "../../types/Food";

type MenuItemProps = {
    food: Food;
    onClickItem: (food: Food) => void;
}

export default function MenuItem({ food, onClickItem }: MenuItemProps) {
    const { name, price, image } = food;

    return (
        <button
            type="button"
            onClick={() => onClickItem(food)}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{price.toLocaleString()}원</p>
        </button>
    )
}
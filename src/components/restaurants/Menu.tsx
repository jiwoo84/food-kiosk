import useCartStore from "../../hooks/useCartStore";
import Food from "../../types/Food";
import MenuItem from "./MenuItem";

type MenuProps = {
    menu: Food[];
}

export default function Menu({ menu }: MenuProps) {
    const [, store] = useCartStore();

    const handleClickAdd = (food: Food) => {
        store.add(food);
        console.log('ehlsl')
    }

    if (!menu.length) {
        return (
            <h2>메뉴가 없습니다</h2>
        )
    }

    return (
        <div>
            {menu.map(food => (
                <MenuItem
                    key={food.id}
                    food={food}
                    onClickItem={handleClickAdd}
                />
            ))}
        </div>
    )
}
import Menu from "./Menu";
import Restaurant from "../../types/Restaurant";

type RestaurantRowProps = {
    restaurant: Restaurant;
}
export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
    const { name, menu } = restaurant;

    return (
        <div>
            <h2>{name}</h2>
            <div>
                <Menu menu={menu} />
            </div>
        </div>
    )
}
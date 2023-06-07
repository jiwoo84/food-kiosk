import useCartStore from "../../hooks/useCartStore"
import CartItem from "./CartItem"
import OperationButtons from "./OperationButtons"
import Summary from "./Summary"
import useCreateOrder from './../../hooks/useCreateOrder';
import { useNavigate } from "react-router";

export default function Cart() {
    const [{ menu }, store] = useCartStore();

    const createOrder = useCreateOrder();

    const navigate = useNavigate();

    const handleClickRemove = (index: number) => {
        store.remove(index)
    }

    const handleClickCancle = () => {
        store.clear();
    }

    const handleClickOrder = async () => {
        if (!menu.length) return;

        const id = await createOrder(menu);

        store.clear();

        navigate(`/order/complete?orderId=${id}`);
    }

    return (
        <>
            <Summary menu={menu} />
            {
                menu.map((food, index) => (
                    <CartItem
                        key={`${index}-${food.id}`}
                        index={index}
                        food={food}
                        onClickRemove={handleClickRemove}
                    />
                ))
            }
            <OperationButtons
                onClickCancle={handleClickCancle}
                onClickOrder={handleClickOrder}
            />
        </>
    )
}
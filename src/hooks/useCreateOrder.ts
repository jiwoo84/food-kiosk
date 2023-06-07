import Food from "../types/Food";

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {

    const createOrder = async (menu: Food[]) => {
        const totalPrice = menu.reduce((acc, food) => acc + food.price, 0);

        const res = await window.fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ menu, totalPrice })
        })

        const { id } = await res.json();

        return id;
    }

    return createOrder;
}
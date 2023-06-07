import Food from './Food';

interface Order {
    id: string;
    menu: Food[];
    totalPrice: number;
}

export default Order;

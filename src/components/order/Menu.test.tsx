import { render, screen } from "@testing-library/react";

import fixtures from "../../../fixtures"

import Menu from "./Menu";

describe('Menu', () => {
    const { order } = fixtures;

    it('renders title', () => {
        render(<Menu order={order} />);

        screen.getByText(/주문목록/)
    });

    it('renders food list', () => {
        render(<Menu order={order} />);

        const { menu } = order;

        menu.forEach(food => screen.getByText(new RegExp(food.name)))
    })

    it('renders totalPrice', () => {
        render(<Menu order={order} />);

        const { totalPrice } = order;

        screen.getByText(new RegExp(`${totalPrice.toLocaleString()}원`))
    })
})
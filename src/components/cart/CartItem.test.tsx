import { fireEvent, render, screen } from "@testing-library/react";
import fixtures from "../../../fixtures"
import CartItem from "./CartItem";
import food from './../../../fixtures/food';


describe('CartItem', () => {
    const food = fixtures.food;
    const handleClickRemove = jest.fn();
    const index = 1;

    beforeEach(() => {
        render(<CartItem
            food={food}
            index={index}
            onClickRemove={handleClickRemove}
        />)
    })

    it('renders food information', () => {
        screen.getByText(/짜장면/);
    })

    it('listens onClick event', () => {
        fireEvent.click(screen.getByText(/X/));

        expect(handleClickRemove).toBeCalledWith(index);
    })
})
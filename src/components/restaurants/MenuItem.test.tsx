import { fireEvent, render, screen } from "@testing-library/react";
import fixtures from "../../../fixtures"
import MenuItem from "./MenuItem";

const handleClickAdd = jest.fn();

describe('MenuItem', () => {
    const { food } = fixtures;

    beforeEach(() => {
        render(<MenuItem
            food={food}
            onClickItem={handleClickAdd}
        />);
    })

    it('renders MenuItem', () => {
        const displayedImage = document.querySelector("img") as HTMLImageElement;

        expect(displayedImage.src).toContain('food1');
        screen.getByText(/짜장면/);
        screen.getByText(/8,000원/);
    })

    it('listens for food click event', () => {
        fireEvent.click(screen.getByText(/짜장면/));

        expect(handleClickAdd).toBeCalledWith(food);
    })
})
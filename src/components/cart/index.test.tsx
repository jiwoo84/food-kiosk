import { render, screen } from "@testing-library/react";
import Cart from "."
import fixtures from "../../../fixtures";
import Food from "../../types/Food";
import renderWithProviders from "../../testHelper";

const context = describe;

const state: { menu: Food[] } = {
    menu: []
}

// useCartStore에서 반환되는 값은 [{menu: ~}, store] 이므로 같은 형태를 만들어주되
// store은 사용되지 않으니 [state] 형태가 됨
jest.mock('../../hooks/useCartStore.ts', () => () => [state]);

describe('Cart', () => {

    it('renders summary', () => {
        render(<Cart />);

        screen.getByText(/주문내역/);
        screen.getByText(/총 결제 예상금액/);
    });

    context('without selected menu', () => {
        beforeEach(() => {
            state.menu = [];
        })

        it('renders zero count', () => {
            render(<Cart />);

            screen.getByText(/0개/);
            screen.getByText(/0원/);
        })
    })

    context('with selected menu', () => {
        beforeEach(() => {
            state.menu = fixtures.menu;
        })

        it('renders selected food list and count', () => {
            render(<Cart />);

            fixtures.menu.forEach(food => {
                screen.getByText(new RegExp(food.name));
            })

            screen.getByText(/3개/);
        })
    })
})
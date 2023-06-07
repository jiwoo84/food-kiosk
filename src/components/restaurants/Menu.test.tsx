import { render, screen } from "@testing-library/react";
import fixtures from "../../../fixtures";
import Menu from "./Menu";
import Food from "../../types/Food";

const context = describe;

describe('Menu', () => {

    context('with menu', () => {
        const menu = fixtures.menu;

        it('renders foods list', () => {
            render(<Menu menu={menu} />);

            screen.getByText(/짜장면/);
            screen.getByText(/짬뽕/);
        })
    })

    context('without menu', () => {
        const menu: Food[] = [];

        it('renders no foods message', () => {
            render(<Menu menu={menu} />);

            screen.getByText(/메뉴가 없습니다/);
        })
    })
})
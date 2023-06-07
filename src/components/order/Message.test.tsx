import { render, screen } from "@testing-library/react";
import Message from "./Message";
import fixtures from "../../../fixtures";
import Order from "../../types/Order";

const context = describe;

describe('Message', () => {
    context('with order', () => {
        const { order } = fixtures;

        it('renders order message', () => {
            render(<Message order={order} />);

            screen.findByText(/완료되었습니다!/);
            screen.findByText(/주문번호 12345678910/);
        })
    })

    context('without order', () => {
        const order = {} as Order;

        it('renders no order message', () => {
            render(<Message order={order} />);

            screen.getByText(/주문을 진행해주세요!/);
        })
    })
})
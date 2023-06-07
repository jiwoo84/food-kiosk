import {
    fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import Order from './index';

describe('Order', () => {
    const orderId = 'ORDER_ID';

    const handleClickBack = jest.fn();

    it('renders result message', () => {
        render((
            <Order
                orderId={orderId}
                onClickBack={handleClickBack}
            />
        ));

        screen.getByText(/주문을 진행해주세요!/);
    });

    // it('renders order menu', async () => {
    //     render((
    //         <Order
    //             orderId={orderId}
    //             onClickBack={handleClickBack}
    //         />
    //     ));

    //     await waitFor(() => {
    //         screen.getByText(/짜장면/);
    //         screen.getByText(/짬뽕/);
    //     });
    // });

    it('listens for back button click event', () => {
        render((
            <Order
                orderId={orderId}
                onClickBack={handleClickBack}
            />
        ));

        fireEvent.click(screen.getByText('메인화면으로 돌아가기'));

        expect(handleClickBack).toBeCalled();
    });
});
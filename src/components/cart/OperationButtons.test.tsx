import { fireEvent, render, screen } from "@testing-library/react"
import OperationButtons from "./OperationButtons"


describe('OperationButtons', () => {
    const handleClickCancel = jest.fn();;
    const handleClickOrder = jest.fn();

    it('listens for click events', () => {
        render(<OperationButtons
            onClickCancle={handleClickCancel}
            onClickOrder={handleClickOrder}
        />);

        fireEvent.click(screen.getByText(/취소/));

        expect(handleClickCancel).toBeCalled();

        fireEvent.click(screen.getByText(/주문하기/));

        expect(handleClickOrder).toBeCalled();
    })
})
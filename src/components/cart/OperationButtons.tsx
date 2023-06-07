import useCartStore from "../../hooks/useCartStore"

type OperationButtonsProps = {
    onClickCancle: () => void;
    onClickOrder: () => void;
}

export default function OperationButtons(
    { onClickCancle, onClickOrder }: OperationButtonsProps
) {

    return (
        <>
            <button
                type="button"
                onClick={onClickCancle}>취소</button>
            <button
                type="button"
                onClick={onClickOrder}>주문하기</button>
        </>
    )
}
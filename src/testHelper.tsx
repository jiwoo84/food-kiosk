import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

type Option = {
    path?: string;
}

export default function renderWithProviders(
    node: ReactNode,
    { path = '/' }: Option = {}
) {
    return render((
        <MemoryRouter initialEntries={[path]}>
            {node}
        </MemoryRouter>
    ))
}
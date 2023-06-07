import { render, screen } from "@testing-library/react"
import Restaurants from "."
import { MemoryRouter } from "react-router";

const context = describe;

describe('Restaurants', () => {
    it('renders without crash', () => {
        render(<Restaurants />);
    })
})

describe('Restaurants', () => {
    it('renders without crash', () => {
        render((
            <MemoryRouter initialEntries={['/']}>
                <Restaurants />
            </MemoryRouter>
        ));
    })
})
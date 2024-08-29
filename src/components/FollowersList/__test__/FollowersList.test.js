import { render, screen } from '@testing-library/react';
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
}

const SECONDS = 1000;
jest.setTimeout(70 * SECONDS)

describe("FollowersList", () => {
    // test('Should render multiple items if sent', async () => {
    //     render(<MockFollowersList />);
    //     const followerDivElement = await screen.findByTestId('follower-item-0');
    //
    //     expect(followerDivElement).toBeInTheDocument();
    // });

    test('Should render multiple items if sent', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findAllByTestId('follower-item-0');
        screen.debug();
        expect(followerDivElement.length).toBe(1);
    });
})

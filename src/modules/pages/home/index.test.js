import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen } from '@testing-library/react';
import Index from './index'; // component to test
import { BrowserRouter as Router } from 'react-router-dom';

const buttons = [
    { text: 'Recipes' },
    { text: 'Grocery List' },
    { text: 'In-Stock' },
    { text: 'SIGN OUT' },
]


// I use test.each to iterate the test cases above
test.each(buttons)(
    "Test if all buttons exist",
    (buttons) => {
        render(
            <Router>
                <Index />
            </Router>
        );
        //Ensure the text is in the dom, will throw error it can't find
        const linkDom = screen.getByText(buttons.text);

        //use jest assertion to verify the buttons exist
        expect(linkDom).toBeInTheDocument();
    }
);


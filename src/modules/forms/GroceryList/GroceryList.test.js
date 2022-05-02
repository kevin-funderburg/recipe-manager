import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen } from '@testing-library/react';
import GroceryList from './groceryList'; // component to test
import { BrowserRouter as Router } from 'react-router-dom';

const table = [
    { text: 'Grocery Items' },
    { text: 'ID' },
    { text: 'Name' },
]


test.each(table)(
    "Test if GroceryList Table exist and contains necessary columns",
    (table) => {
        render(
            <Router>
                <GroceryList />
            </Router>
        );
        //Ensure the text is in the dom, will throw error it can't find
        const linkDom = screen.getByText(table.text);

        //use jest assertion to verify the buttons exist
        expect(linkDom).toBeInTheDocument();
    }
);

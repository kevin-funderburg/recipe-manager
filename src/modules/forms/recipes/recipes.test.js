import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen } from '@testing-library/react';
import Recipes from './recipes'; // component to test
import { BrowserRouter as Router } from 'react-router-dom';

const table = [
    { text: 'Recipe List' },
    { text: 'ID' },
    { text: 'Name' },
    { text: 'Category' },
    { text: 'Prep Time' },
    { text: 'Cook Time' },
    { text: 'Rating' },
]


test.each(table)(
    "Test if Recipe List Table exist and contains necessary columns",
    (table) => {
        render(
            <Router>
                <Recipes />
            </Router>
        );
        //Ensure the text is in the dom, will throw error it can't find
        const linkDom = screen.getByText(table.text);

        //use jest assertion to verify the buttons exist
        expect(linkDom).toBeInTheDocument();
    }
);

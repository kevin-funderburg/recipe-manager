import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen } from '@testing-library/react';
import NewRecipe from './newRecipe'; // component to test
import { BrowserRouter as Router } from 'react-router-dom';

const buttons = [
    { text: 'CANCEL' },
    { text: 'SAVE' },
]

const textfields = [
    { text: 'Recipe Name *' },
    { text: 'Description *' },
    { text: 'Ingredients' },
    { text: 'Directions' },
    { text: 'Link' },
    { text: 'Category' },
    { text: 'Prep Time *' },
    { text: 'Cook Time *' },
]

//TO DO: TEST entry
// const entries = [
//     {name: 'test recipe', description: 'testing description', ingredients: 'eggs, water, air',
// direction: 'test direction', link: 'www.testurl.com', category: 'Beef', prepTime: '15' , cookTime: '30'}
// ]


// I use test.each to iterate the test cases above
test.each(buttons)(
    "Test if all submit buttons exist",
    (buttons) => {
        render(
            <Router>
                <NewRecipe />
            </Router>
        );
        //Ensure the text is in the dom, will throw error it can't find
        const linkDom = screen.getByText(buttons.text);

        //use jest assertion to verify the buttons exist
        expect(linkDom).toBeInTheDocument();
    }
);

// I use test.each to iterate the test cases above
test.each(textfields)(
    "Test if all neccessary textfields exist",
    (textfields) => {
        render(
            <Router>
                <NewRecipe />
            </Router>
        );
        //Ensure the text is in the dom, will throw error it can't find
        const linkDom = screen.getByLabelText('Recipe Name *') ;

        //use jest assertion to verify textfields property
        expect(linkDom).toBeInTheDocument();
    }
);

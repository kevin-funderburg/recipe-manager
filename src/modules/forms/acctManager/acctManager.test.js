import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen } from '@testing-library/react';
import AcctManager from './acctManager'; // component to test
import { BrowserRouter as Router } from 'react-router-dom';
import { isEditable } from '@testing-library/user-event/dist/utils';

const buttons = [
    { text: 'CANCEL' },
    { text: 'SAVE' },
]

const textfields = [
    { text: 'outlined-text-firstName-label' },
    { text: 'Last Name' },
    { text: 'Location' },
    { text: 'Contact' },
    { text: 'email' },
    { text: 'Password' },
]


const ids = [
    { text: 'outlined-text-firstName-label' },
    // { text: 'Last Name' },
    // { text: 'Location' },
    // { text: 'Contact' },
    // { text: 'email' },
    // { text: 'Password' },
]
//TO DO: TEST entry
// const entries = [
//     {name: 'test recipe', description: 'testing description', ingredients: 'eggs, water, air',
// direction: 'test direction', link: 'www.testurl.com', category: 'Beef', prepTime: '15' , cookTime: '30'}
// ]


// I use test.each to iterate the test cases above
test.each(buttons)(
    "Test if all neccessary buttons exist",
    (buttons) => {
        render(
            <Router>
                <AcctManager />
            </Router>
        );
        //Ensure the text is in the dom, will throw error it can't find
        const linkDom = screen.getByText(buttons.text);

        //use jest assertion to verify the buttons exist
        expect(linkDom).toBeInTheDocument();
    }
);

// // I use test.each to iterate the test cases above
// test.each(textfields)(
//     "Test if all neccessary textfields exist",
//     (textfields) => {
//         render(
//             <Router>
//                 <AcctManager />
//             </Router>
//         );
//         //Ensure the text is in the dom, will throw error it can't find
//         const linkDom = screen.getByLabelText(textfields.text) ;

//         //use jest assertion to verify textfields property
//         expect(linkDom).toBeInTheDocument();
//     }
// );

// I use test.each to iterate the test cases above
test.each(ids)(
    "Test if all neccessary textfields exist",
    (ids) => {
        const result = render(
            <Router>
                <AcctManager />
            </Router>
        );
        const theID = result.container.querySelector(ids.text);
        //use jest assertion to verify textfields property
        // expect(theID).toBeInTheDocument();
    }
);

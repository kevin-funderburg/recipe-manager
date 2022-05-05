import { render, screen } from '@testing-library/react';
import App from './App';


const links = [
  {text: 'New Recipe', location: "/newRecipe"},
  {text: 'My Account', location: "/myAccount"},
  {text: 'My Recipes', location: "/myRecipes"},
  {text: 'Grocery List', location: "/groceryList"},
  {text: 'Download', location: "/download"},
  {text: 'Log Out', location: "/"},
]

// I use test.each to iterate the test cases above
test.each(links)(
  "Check if Nav Bar have %s link.",
  (link) => {
    render(<App  />);
//Ensure the text is in the dom, will throw error it can't find
    const linkDom = screen.getByText(link.text); 

//use jest assertion to verify the link property
    expect(linkDom).toHaveAttribute("href", link.location);
  }
);
 

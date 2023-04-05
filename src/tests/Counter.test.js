
import Counter from '../components/Counter.js'
import { render, screen, fireEvent } from '@testing-library/react';

import userEvent from "@testing-library/user-event";



beforeEach(() => {
  // Render the Counter component here
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Counter />);

})



test('renders counter message', () => {
    const counterMessage = screen.getByTestId("count");
    expect(counterMessage).toBeInTheDocument();
    expect(counterMessage).toHaveTextContent("0");

});



 test('should render initial count with value of 0', () => {
     const countElement = screen.getByTestId("count");
     expect(countElement).toHaveTextContent("0");

});


 test('clicking + increments the count', () => {

     const incrementButton = screen.getByText("+");
     const countElement = screen.getByTestId("count");

     fireEvent.click(incrementButton);
     expect(countElement).toHaveTextContent("1");

     fireEvent.click(incrementButton);
     expect(countElement).toHaveTextContent("2");



});

 test('clicking - decrements the count', () => {

     const decrementButton = screen.getByText("-");
     const countElement = screen.getByTestId("count");

     fireEvent.click(decrementButton);
     expect(countElement).toHaveTextContent("-1");

     fireEvent.click(decrementButton);
     expect(countElement).toHaveTextContent("-2");


 });



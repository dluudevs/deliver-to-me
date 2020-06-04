import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('should take a snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(asFragment(<App/>)).toMatchSnapshot()
});

test('displays loading message with city name', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const inputValue = screen.getByLabelText('Search', {selector: 'input'})
  const [ label, submit ] = screen.getAllByText('Search')

  await userEvent.type(inputValue, 'toronto')
  await userEvent.click(submit)
  
  expect(screen.getByText('Searching for restaurants in: toronto')).toBeInTheDocument()

})


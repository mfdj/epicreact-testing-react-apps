// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // We can swap `root = createRoot(…)` and `root.render(…)` with RTL's `render(…)`
  // The returned `container` which is the div React Testing Library creates for us.
  const {container} = render(<Counter />)

  const decrement = screen.getByText('Decrement')
  const increment = screen.getByText('Increment')
  const message = container.firstChild.querySelector('div')

  // toHaveTextContent via @testing-library/jest-dom
  expect(message).toHaveTextContent('Current count: 0')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')

  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})

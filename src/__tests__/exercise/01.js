// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://react.dev/blog/2022/03/08/react-18-upgrade-guide#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

function appendRoot() {
  const rootEl = document.createElement('div')
  rootEl.setAttribute('id', 'root')
  document.body.append(rootEl)
  return { root: createRoot(rootEl), rootEl };
}

test('counter increments and decrements when the buttons are clicked', async () => {
  const { root, rootEl } = appendRoot();

  await act(() => root.render(<Counter />));

  const buttons = rootEl.querySelectorAll('button')
  const increment = Array.from(buttons).find(el => el.innerHTML === 'Increment')
  const decrement = Array.from(buttons).find(el => el.innerHTML === 'Decrement')
  const message = rootEl.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0');

  await act(() => increment.click());
  expect(message.textContent).toBe('Current count: 1');

  await act(() => decrement.click());
  expect(message.textContent).toBe('Current count: 0');

  await act(() => decrement.click());
  expect(message.textContent).toBe('Current count: -1');

  rootEl.remove()
})

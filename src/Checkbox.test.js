import React from 'react'
import Checkbox from './Checkbox'
import { render, screen, fireEvent } from '@testing-library/react'

test('Selecting checkbox', () => {
  render(<Checkbox />)
  const checkbox = screen.getByLabelText(/not checked/)
  fireEvent.click(checkbox)
  expect(checkbox.checked).toEqual(true)
})

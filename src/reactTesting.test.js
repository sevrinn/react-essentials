import { render, screen } from '@testing-library/react'
import React from 'react'
import ReactTesting from './ReactTesting'

test('renders an h1', () => {
  const { getByText } = render(<ReactTesting />)
  const h1 = screen.getByText(/Hello React Testing Library/)
  expect(h1).toHaveTextContent('Hello React Testing Library')
})

import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Card from '../../components/Card'

let container

describe('Card', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('render the default card with header', () => {
    act(() => {
      render(<Card header={<h1>Test</h1>} />, container)
    })
    const cardHeader = container.querySelector('h1')
    expect(cardHeader.textContent).toBe('Test')
  })

  it('render the default card without header', () => {
    act(() => {
      render(
        <Card>
          <h2>Test</h2>
          <button>Test2</button>
        </Card>,
        container
      )
    })
    const cardH2 = container.querySelector('h2')
    const cardInput = container.querySelector('button')
    expect(cardH2.textContent).toBe('Test')
    expect(cardInput.textContent).toBe('Test2')
  })
})

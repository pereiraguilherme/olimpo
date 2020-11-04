import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import MyTemplate from '../../components/TemplateComponent'

let container

describe('Template', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('render the default card with header', () => {
    act(() => {
      render(<Template/> , container)
    })
    const cardHeader = container.querySelector('h1')
    expect(cardHeader.textContent).toBe('This is a template component')
  })
})

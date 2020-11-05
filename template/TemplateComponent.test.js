/* eslint-disable */ 
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

  it('render MyTemplate', () => {
    act(() => {
      render(<MyTemplate> <h1>This is a template</h1></MyTemplate>, container)
    })
    const template = container.querySelector('h1')
    expect(template.textContent).toBe('This is a template')
  })
})

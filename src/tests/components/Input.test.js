import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Input from '../../components/Input'

let container

describe('Input', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('render the default input with label', () => {
    act(() => {
      render(<Input label='Test'/>, container)
    })
    const label = container.querySelector('label')
    expect(label.textContent).toBe('Test')
  })
  it('render the default input with placeholder', () => {
    act(() => {
      render(<Input placeholder='Test'/>, container)
    })
    const input = container.querySelector('input')
    expect(input.placeholder).toBe('Test')
  })
  it('should be disabled when property is true', () => {
    act(() => {
      render(<Input disabled={true} />, container)
    })
    const input = container.querySelector('input')
    expect(input.disabled).toBe(true)
  })

  it('should call onClick method', () => {
    const onClick = jest.fn()
    act(() => {
      render(<Input onClick={onClick} />, container)
    })
    const input = container.querySelector('input')

    act(() => {
      input.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should call onMouseOver method', () => {
    const onMouseOver = jest.fn()
    act(() => {
      render(<Input onMouseOver={onMouseOver} />, container)
    })
    const input = container.querySelector('input')

    act(() => {
      input.dispatchEvent(
        new MouseEvent('mouseover', {
          view: window,
          bubbles: true,
          cancelable: true
        })
      )
    })
    expect(onMouseOver).toHaveBeenCalledTimes(1)
  })
})

import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Button from '../../components/Button'

let container

describe('Button', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('render the default button', () => {
    act(() => {
      render(<Button text='Test' />, container)
    })
    const button = container.querySelector('button')
    expect(button.textContent).toBe('Test')
  })

  it('should text value be placeholder when no propertie defined', () => {
    act(() => {
      render(<Button />, container)
    })
    const button = container.querySelector('button')
    expect(button.textContent).toBe('Placeholder')
  })

  it('should call onClick method', () => {
    const onClick = jest.fn()
    act(() => {
      render(<Button onClick={onClick} />, container)
    })
    const button = container.querySelector('button')

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should call onMouseOver method', () => {
    const onMouseOver = jest.fn()
    act(() => {
      render(<Button onMouseOver={onMouseOver} />, container)
    })
    const button = container.querySelector('button')

    act(() => {
      button.dispatchEvent(
        new MouseEvent('mouseover', {
          view: window,
          bubbles: true,
          cancelable: true
        })
      )
    })
    expect(onMouseOver).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when property is true', () => {
    act(() => {
      render(<Button disabled={true} />, container)
    })
    const button = container.querySelector('button')
    expect(button.disabled).toBe(true)
  })
  it('render the default button from MaterialUI', () => {
    act(() => {
      render(<Button framework='materialui'/>, container)
    })
    const button = container.querySelector('button')
    expect(button.className).toBe('MuiButtonBase-root MuiButton-root MuiButton-text')
  })

  it('render the default button from Antd', () => {
    act(() => {
      render(<Button framework='antd'/>, container)
    })
    const button = container.querySelector('button')
    expect(button.className).toBe('ant-btn')
  })
})

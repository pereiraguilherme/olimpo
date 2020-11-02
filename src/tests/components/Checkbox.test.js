import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Checkbox from '../../components/Checkbox'

let container

describe('Checkbox', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('render the default input with label', () => {
    act(() => {
      render(<Checkbox />, container)
    })
    const label = container.querySelector('label')
    const checkbox = container.querySelector('input')

    expect(label.textContent).toBe('Placeholder')
    expect(checkbox.type).toBe('checkbox')
  })

  it('should be disabled when property is true', () => {
    act(() => {
      render(<Checkbox disabled />, container)
    })
    const checkbox = container.querySelector('input')
    expect(checkbox.disabled).toBe(true)
  })

  it('should call onClick method', () => {
    const onClick = jest.fn()
    act(() => {
      render(<Checkbox onClick={onClick} />, container)
    })
    const checkbox = container.querySelector('input')

    act(() => {
      /* global MouseEvent */
      checkbox.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('render the default checkbox from MaterialUI', () => {
    act(() => {
      render(<Checkbox framework='materialui' />, container)
    })
    const checkbox = container.querySelector('input')
    expect(checkbox.className).toBe('PrivateSwitchBase-input-4')
    expect(checkbox.type).toBe('checkbox')
  })

  it('render the default checkbox from Antd', () => {
    act(() => {
      render(<Checkbox framework='antd' />, container)
    })
    const checkbox = container.querySelector('input')
    expect(checkbox.className).toBe('ant-checkbox-input')
    expect(checkbox.type).toBe('checkbox')
  })
})

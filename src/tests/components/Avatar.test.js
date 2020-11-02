import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Avatar from '../../components/Avatar'

let container

describe('Avatar', () => {
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  it('render the default image avatar', () => {
    act(() => {
      render(<Avatar />, container)
    })
    const avatar = container.querySelector('img')
    expect(avatar.alt).toBe('Avatar')
  })
  it('render the default text avatar', () => {
    act(() => {
      render(<Avatar type='text' />, container)
    })
    const avatar = container.querySelector('span')
    expect(avatar.textContent).toBe('OP')
  })
  it('should have className circleAvatar', () => {
    act(() => {
      render(<Avatar shape='circle' />, container)
    })
    const avatar = container.querySelector('img')
    expect(avatar.className).toBe('circleAvatar')
  })
  it('should call onMouseOver method', () => {
    const onMouseOver = jest.fn()
    act(() => {
      render(<Avatar onMouseOver={onMouseOver} />, container)
    })
    const avatar = container.querySelector('img')

    act(() => {
      avatar.dispatchEvent(
        /* global MouseEvent */
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

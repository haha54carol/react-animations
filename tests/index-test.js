import expect from 'expect'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Component from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })


  it('display a title', () => {
    render(<Component />, node, () => {
      expect(node.innerHTML)
        .toContain('React-Animations - Examples')
    })
  })

  it('display a button', () => {
    render(<Component />, node, () => {
      expect(node.innerHTML)
        .toContain('btn')
        .toContain('Click Me')
    })
  })

  it('display 7 types of animations', () =>{
    render(<Component />, node, () =>{
      expect(node.innerHTML)
      .toContain('topIn')
      .toContain('bottomIn')
      .toContain('leftIn')
      .toContain('rightIn')
      .toContain('topInBottomOut')
      .toContain('zoomIn')
      .toContain('fade')
    })
  })
  
})

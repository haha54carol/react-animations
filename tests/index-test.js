import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import Animation from 'src/'

describe('Component', () => {
    let node

    beforeEach(() => {
        node = document.createElement('div')
    })

    afterEach(() => {
        unmountComponentAtNode(node)
    })


    it('mount animation', () => {
        render(
            <Animation act="topIn" in={true}>
                <div>test</div>
            </Animation>, node, () => {
                expect(node.innerHTML)
                    .toContain('test')
            })
    })


})

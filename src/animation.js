import React from 'react'
import { CSSTransition } from 'react-transition-group'

import '../css/animation.css'

const Animation = ({ children, ...props }) => {
    const { act, ...rest } = props
    const animateType = act ? act : ''

    const mergeProps = Object.assign({
        classNames: animateType,
        key: animateType,
        timeout: { enter: 300, exit: 200 },
        in: true,
        mountOnEnter: true,
        unmountOnExit: true,
    }, rest)

    return (
        <CSSTransition {...mergeProps}>
            {children}
        </CSSTransition>
    )
}

export default Animation
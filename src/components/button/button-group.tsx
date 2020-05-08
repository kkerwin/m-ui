import React from 'react'
import classNames from 'classnames'


export interface ButtonGroupProps {
    fixedBottom ?: boolean
    extra ?: React.ReactNode
}

const ButtonGroup:React.FC<ButtonGroupProps> = ({ children }) => {

    return <div>
        { children }
    </div>
}

export default ButtonGroup
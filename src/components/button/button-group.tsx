import React from 'react'
import classNames from 'classnames'


export interface ButtonGroupProps {
    fixedBottom ?: boolean
    extra ?: React.ReactNode
    className ?: string
    style ?: React.CSSProperties
}

const ButtonGroup:React.FC<ButtonGroupProps> = ({ children, className, fixedBottom, extra, ...restProps}) => {

    if(React.Children.toArray(children).some(s=> [ 'number', 'string' ].includes(typeof s) || (s as any).type.displayName !== 'Button') ){
        console.error('ButtonGroup的children只能是Button')
    }
    
    return <div className={classNames('mui-btn-group',className,{
        'mui-btn-group-fixed-bottom':fixedBottom
    })} { ...restProps }>
        {
            extra && <div className="mui-btn-group-extra">
                { extra }
            </div>     
        }
        { children }
    </div>
}

export default ButtonGroup
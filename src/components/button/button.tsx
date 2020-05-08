import React from 'react'
import classNames from 'classnames'
import Icon from '../icon'
// import Group from './button-group'


type ButtonType = 'primary' | 'danger' | 'dashed' 
// type HtmlType = 'button' | 'submit' | 'reset'

export interface BaseButtonProps  {
    className ?: string    
    type ?: ButtonType
    icon ?: string
    small ?: boolean
    children ?: React.ReactNode
    ghost ?: boolean
    loading ?: boolean
    block ?: boolean
    circle ?: boolean
}
type ButtonProps = BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>,'type'> & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,'type'>
const Button:React.FC<ButtonProps> & { Group:React.FC<any> } = ({ 
    href,  
    type,
    children, 
    disabled,
    loading,
    ghost,
    block,
    small,
    circle,
    icon,
    className,
    onClick 
}) => {
   
    const cls = classNames('mui-btn', className, {
        [`mui-btn-${type}`] : type,
        'mui-btn-link' : href,
        'mui-btn-block' : block,
        'mui-btn-disabled' : disabled,
        'mui-btn-loading' : loading,
        'mui-btn-ghost' : ghost,
        'mui-btn-icon' : icon,
        'mui-btn-small' : small,
        'mui-btn-circle' : circle,
    })

    const handleClick = (e:React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if(loading || disabled){
            e.preventDefault() 
        }
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
          }
    }

    let _icon = icon ? <Icon type={icon}/> : null
    if(loading){
        _icon =  <Icon type="loading"/> 
    }
    const child:React.ReactNode = (<>
        { _icon }
        <span>
            { children }
        </span>
    </>)
    if(href){
        return (<a href={href} className={cls} onClick={handleClick}> { child } </a>)
    }
    return (<button className={cls} onClick={handleClick}>{ child }</button>)
}

Button.displayName = 'Button'

Button.Group = () => {
    return <div>ada</div>
}

export default Button

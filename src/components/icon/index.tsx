import React, { useContext } from 'react'
import classNames from 'classnames'
import { ReactComponent as Right } from  '../../assets/svg/right.svg'
import { ReactComponent as Left } from  '../../assets/svg/left.svg'
import { ReactComponent as Up } from  '../../assets/svg/up.svg'
import { ReactComponent as Down } from  '../../assets/svg/down.svg'
import { ReactComponent as Close } from  '../../assets/svg/close.svg'
import { ReactComponent as Check } from  '../../assets/svg/check.svg'
import { ReactComponent as Loading } from  '../../assets/svg/loading.svg'

import  './icon.less'
import { ConfigContext } from '../config-provider'


export interface IconProps {
    type : string 
    prefix ?: string 
    className ?: string
    style ?: React.CSSProperties
}


const defaultIconTypes = [ <Right key='right'/>, <Left key='left'/>, <Up key="up"/>, 
<Down key="down"/>, <Close key="close"/>, <Check key="check"/>, <Loading key="loading"/> ]

const Icon:React.FC<IconProps> = ({ type, prefix, style, className }) => {
    let defaultIcon = defaultIconTypes.find(f=>f.key === type) 
    const configCtx = useContext(ConfigContext) 
    if(defaultIcon){
        defaultIcon = React.cloneElement(defaultIcon as React.ComponentElement<IconProps,any> ,{ style })    
    }else{
        if(!prefix && configCtx.icon?.prefix){
            prefix = configCtx.icon.prefix 
        }else{
            console.error('请先配置prefix，或使用默认图标')
        }
    }
    return (<i className={classNames('mui-icon', className)} style={style}>         
        { defaultIcon ? defaultIcon : <svg style={style}><use xlinkHref={`#${prefix}-${type}`}></use></svg> }
    </i>)
}

Icon.defaultProps = {

}

export default Icon
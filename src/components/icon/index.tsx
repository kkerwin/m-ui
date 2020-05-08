import React from 'react'
import { ReactComponent as Right } from  '../../assets/svg/right.svg'
import { ReactComponent as Left } from  '../../assets/svg/left.svg'
import { ReactComponent as Up } from  '../../assets/svg/up.svg'
import { ReactComponent as Down } from  '../../assets/svg/down.svg'
import { ReactComponent as Close } from  '../../assets/svg/close.svg'
import { ReactComponent as Check } from  '../../assets/svg/check.svg'

import  './icon.less'


interface IconProps {
    type : string 
    prefix ?: string 
    className ?: string
    style ?: React.CSSProperties
}


const defaultIconTypes = [ <Right key='right'/>, <Left key='left'/>, <Up key="up"/>, <Down key="down"/>, <Close key="close"/>, <Check key="check"/> ]

const Icon:React.FC<IconProps> = ({ type, prefix, style }) => {
    let isDefault = defaultIconTypes.find(f=>f.key === type)      
    if(isDefault){
        isDefault = React.cloneElement(isDefault as React.FunctionComponentElement<any> ,{ style })    
    }
    return (<i className="icon" style={{ color:'red' }}>         
        { isDefault ? isDefault : <svg style={style}><use xlinkHref={`#${prefix}-${type}`}></use></svg> }
    </i>)
}

Icon.defaultProps = {
    
}

export default Icon
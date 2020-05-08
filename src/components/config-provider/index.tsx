import React, { createContext } from 'react'
import { IconProps } from '../icon'

interface ConfigProps {
    icon ?: Pick<IconProps,'prefix'>
}

// interface CtxTypes {
//     icon ?: Pick<IconProps,'prefix'>
// }

export const ConfigContext = createContext<ConfigProps>({})

const ConfigProvider:React.FC<ConfigProps> = ({ children, icon }) => {
    
    return <ConfigContext.Provider value={{
        icon
    }}>
    { children }
    </ConfigContext.Provider>
}

ConfigProvider.defaultProps = {
    icon:{
        prefix:"icon"
    }
}

export default ConfigProvider
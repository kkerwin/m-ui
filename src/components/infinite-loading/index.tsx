import React, { useLayoutEffect } from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import './infinite.less'

export interface InfiniteLoadingProps {
    loading ?: boolean
    threshold ?: number
    hasMore ?: boolean
    loadingContent ?: React.ReactNode
    animation ?: boolean
    className ?: string
    style ?: React.CSSProperties
}

const InfiniteLoading:React.FC<InfiniteLoadingProps> = ({ 
    children, 
    className, 
    loadingContent,
    style }) => {

    const cls = classNames('mui-infinite',className)

    useLayoutEffect(()=>{

    },[])
    
    return <div className={cls} style={style}>
        { children }
        <div className="mui-infinite-loading">
            {
                loadingContent ? loadingContent : <><Icon type='loading' className="loading-icon"/> 加载中...</>
            }
        </div>
    </div>
}

export default InfiniteLoading


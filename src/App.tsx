import React from 'react'
import './App.css'
import { Icon, ConfigProvider } from './components'

function App() {
    return (
		<ConfigProvider >
			<div className="App">
				<h1 style={{ textAlign:'center' }}>m-ui</h1>
				<div>
					<p>icon</p>
					<Icon type='check' style={{ fontSize:'12px' }}/>
					<Icon type='heart-fill' style={{  fill:"red" }} />
				</div>
			</div>
		</ConfigProvider>
    )
}

export default App

import React from 'react'
import './App.css'
import { Icon, ConfigProvider, Button } from './components'

function App() {
    return (
		<ConfigProvider >
			<div className="App">
				<h1 style={{ textAlign:'center' }}>m-ui</h1>
				<ul>
					<li>
						<div>
							<p>icon</p>
							<Icon type='check' style={{ fontSize:'12px' }}/>
							<Icon type='heart-fill' style={{  fill:"red" }} />
						</div>
					</li>
					<li>
						<div className="btn-demo">
							<p>button</p>
							<Button type="primary" icon="heart-fill" block >block</Button>
							<Button type="primary" icon="heart-fill" >primary</Button>
							<Button type="danger" circle icon="heart-fill" >danger</Button>
							<Button type='dashed' icon="close">dashed</Button>
							<Button disabled icon="check">disabled</Button>
							<Button loading >loading</Button>
							<Button ghost icon="heart-fill" >ghost</Button>
							<Button small icon="heart-fill" >small</Button>
							<Button.Group fixedBottom extra={<>合计：100元</>}>	
								<Button style={{ width:'100px' }} type="danger">支付</Button>
							</Button.Group>
						</div>
					</li>
				</ul>
			</div>
		</ConfigProvider>
    )
}

export default App

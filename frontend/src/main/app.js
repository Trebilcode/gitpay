import React, { Component } from 'react'
import PropTypes from 'prop-types'

import injectTabEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import { red500 } from 'material-ui/styles/colors';

import './app.css'

injectTabEventPlugin()

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {open: false}
	}
	handleToggle() {
		this.setState({open: !this.open})
	}
	render() {
		return (
			<MuiThemeProvider>
				<div className='container'>
					<AppBar title='GitPay' 
						onLeftIconButtonTouchTap={() => this.handleToggle()}
						iconElementRight={<Button label='Login' />} />
					<Drawer open={this.state.open} 
						docked={false} 
						onRequestChange={(open) => this.setState({open})} />
				</div>				
			</MuiThemeProvider>			
		)
	}
}

export default App
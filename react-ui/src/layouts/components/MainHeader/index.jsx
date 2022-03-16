import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Dimmer, Button, Icon} from 'semantic-ui-react'
import {Navigation} from '../../components'
import './style.css';

class MainHeader extends Component {
    state = {open: false};
    handleOpen = () => {
        this.setState({ open: true });
    }
    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
		const { open } = this.state
        return (
            <>
                <header className='header'>
                    <Button icon className='drower' onClick={this.handleOpen}>
                        <Icon name='bars' />
                    </Button>
                </header>

                <aside className={'aside ' + (open?'is_active':'')} aria-hidden={open?'false':'true'}>
                    <Navigation />
                    <Button icon className='close' onClick={this.handleClose}>
                        <Icon name="close" />
                        <span className='blind'>닫기</span>
                    </Button>
                </aside>
            </>
        )   
    }
}
export default MainHeader
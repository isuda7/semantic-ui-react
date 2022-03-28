import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

class MainFooter extends Component {
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
                <footer className='footer'>
                    <Button icon className='drower' onClick={this.handleOpen}>
                        <Icon name='bars' />
                    </Button>
                </footer>

                <aside className={'aside ' + (open?'is_active':'')} aria-hidden={open?'false':'true'}>
                    <div className='aside_head'>
                        <h1 className='aside_logo'>SUNI</h1>
                        <Link to='' className='logout'>Logout</Link>
                    </div>
                    <div className='aside_body'>
                        <nav className='gnb'>
                            <ul className='gnb-dep1'>
                                <li className='gnb-dep1-item'>
                                    <NavLink to='/main/mainIndex' className='gnb-dep1-link'>Editorials</NavLink>
                                </li>
                                <li className='gnb-dep1-item'>
                                    <NavLink to='/main/mainIndex2' className='gnb-dep1-link'>Reviews</NavLink>
                                </li>
                                <li className='gnb-dep1-item'>
                                    <NavLink to='/main/mainIndex3' className='gnb-dep1-link'>Upcoming Events</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <Button icon className='close' onClick={this.handleClose}>
                        <Icon name="close" />
                        <span className='blind'>닫기</span>
                    </Button>
                </aside>
            </>
        )
    }
}
export default MainFooter
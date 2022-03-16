import React, {Component} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {Button, Icon, Menu} from "semantic-ui-react"
import './style.css';

class Navigation extends Component {
	state = {}
	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
		const { activeItem } = this.state
        return (
			<>
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
			</>
        )   
    }
}
export default Navigation
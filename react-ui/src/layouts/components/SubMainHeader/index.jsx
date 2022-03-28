import React from 'react';
import { Popup, Button } from 'semantic-ui-react';

const SubMainHeader = (props) => {
	return (
		<header className='header'>
			<div className='header_left'>
				<h1>{props.title}</h1>
			</div>
			<div className='header_right'>
				<Popup on='click' trigger={<Button type='button'><span className='_blind'>알림</span></Button>}>
					<Popup.Content>
						<p>Popup Content</p>
					</Popup.Content>
				</Popup>
				<Button type='button'><span className='_blind'>검색</span></Button>
			</div>
		</header>
	)
}
export default SubMainHeader
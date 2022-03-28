import React from 'react';
import { Button } from 'semantic-ui-react';

const PopupHeader = (props) => {
	return (
		<header className={'header' + ((typeof props.className === 'string') && ' ' + props.className)}>
			<div className='header_left'>
				<Button type='button'><span className='_blind'>닫기</span></Button>
				{(typeof props.title === 'string') && <h1>{props.title}</h1>}
			</div>
			<div className='header_right'>
				{props.children}
			</div>
		</header>
	)
}
export default PopupHeader
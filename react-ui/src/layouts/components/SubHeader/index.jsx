import React from 'react';
import { Popup, Button } from 'semantic-ui-react';

// className: bg_black bg_white bg_opacity 등 사용자정의 클래스

// addBtnCopy: 복사버튼 적용
// addBtnBookmark: 북마크버튼 추가
// addBtnMore: 더보기 적용

// title="": 제목이 있는 경우
// children: 모든 자식요소 (변경되는 요소들 하드코딩)
const SubHeader = (props) => {
	return (
		<header className={'header' + ((typeof props.className === 'string') && ' ' + props.className)}>
			<div className='header_left'>
				<Button type='button'><span className='_blind'>뒤로가기</span></Button>
				{(typeof props.title === 'string') && <h1>{props.title}</h1>}
			</div>
			<div className='header_right'>
				{props.addBtnCopy && <Button type='button'><span className='_blind'>복사</span></Button>}
				{props.addBtnBookmark && <Button type='button'><span className='_blind'>북마크</span></Button>}
				{props.addBtnMore &&
					<Popup on='click' trigger={<Button type='button'><span className='_blind'>더보기</span></Button>}>
						<Popup.Content>
							<p>Popup Content</p>
						</Popup.Content>
					</Popup>
				}
			</div>
		</header>
	)
}
export default SubHeader
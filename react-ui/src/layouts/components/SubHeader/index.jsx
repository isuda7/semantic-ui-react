import React from 'react';
import { Popup, Button } from 'semantic-ui-react';
import classNames from "classnames";

// isDark: Dark Mode True
// isWhite: White Mode True
// isOverwap: Header영역이 Body영역위로 올라옴 (속성이 없는경우 영역이 분리됨)

// addBtnCopy: 복사버튼 적용
// addBtnBookmark: 북마크버튼 추가
// addBtnMore: 더보기 적용

// title="": 제목이 있는 경우
// children: 모든 자식요소 (변경되는 요소들 하드코딩)
const SubHeader = (props) => {
    const AddBtnMore = () => {
        return (
            <Popup trigger={<Button type='button'><span className='_blind'>더보기</span></Button>}>
                <Popup.Content>
                    <p>Popup Content</p>
                </Popup.Content>
            </Popup>
        )
    }
    return (
        <header className={'header'+
            (props.isDark?' is_dark':'')+
            (props.isWhite?' is_white':'')+
            (props.isOverwap?' is_overwrap':'')
        }>
            <div className='header_left'>
                <Button type='button'><span className='_blind'>뒤로가기</span></Button>
                { props.title && <h1>{props.title}</h1> }
            </div>
            <div className='header_right'>
                { props.addBtnCopy && <Button type='button'><span className='_blind'>복사</span></Button> } 
                { props.addBtnBookmark && <Button type='button'><span className='_blind'>북마크</span></Button> } 
                { props.addBtnMore && AddBtnMore() }
            </div>
        </header>
    )
}
export default SubHeader
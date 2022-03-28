import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Image } from 'semantic-ui-react';
import avatar36_01 from "../../../assets/images/demo/avata-profile-36-01.svg";

const MainHeader = (props) => {
	return (
        <header className='header'>
            <div className='header_left'>
                <Link to='' className='profile_home'>
                    <Image src={avatar36_01} avatar className='size-36' />
                    <h1>{props.title}<span className='blind'> 마이 홈</span></h1>
                </Link>
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
export default MainHeader
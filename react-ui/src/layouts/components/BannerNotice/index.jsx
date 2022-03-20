import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Button, Icon} from "semantic-ui-react"
import './style.scss';

class BannerNotice extends Component {
    state = {isOpened: true};
    handleBannerClick = () => this.setState({isOpened: false})
    render() {
        const {isOpened} = this.state;
        return (
            <div className={'banner_notice' + (!isOpened?' is_closed':'')}>
                <Link to='/main/mainIndex' className='banner in_sec'>
                    <p>UX DESIGN강좌 11월 수강신청 안내</p>
                </Link>
                <Button type='button' className='close' icon  onClick={this.handleBannerClick}>
                    <Icon className='close'/>
                    <span className='blind'>닫기</span>
                </Button>
            </div>
        )   
    }
}
export default BannerNotice
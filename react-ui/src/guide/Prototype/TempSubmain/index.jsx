import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';
import { MainHeader, MainFooter } from '../../../layouts/components';
import { Section01, Section02 } from './components';
import './style.css';

class TempSubmain extends Component {
    render() {
        return (
            <div className='sub_wrapper main'>
                <MainHeader submain title='추천' />
                <main role="main" className='container'>
                    <div className='content_head'>
                        <h2>Content Heading 2</h2>
                        <p className='summary'>Content Heading Summary</p>
                    </div>
                    <div className='content_body'>
                        <Section01 />
                        <Section02 />
                    </div>
                    <div className='content_foot'>
                        <div className='page_action'>
                            <Button type='button' className='primary'>버튼</Button>
                        </div>
                    </div>
                </main>
                <MainFooter />
            </div>
        )
    }
}
export default TempSubmain
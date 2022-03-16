import React, {Component} from 'react';
import {Section01, Section02} from './components';
import './style.css';

class Template02 extends Component {
    render() {
        return (
            <main role="main" className='container'>
                <div className='content-head'>
                    <h2>Content Heading 2</h2>
                </div>
                <div className='content-body'>
                    <Section01 />
                    <Section02 />
                </div>
            </main>
        )
    }
}
export default Template02
import React, {Component} from 'react';
import {Section01, Section02} from './components';
import './style.css';

class MainIndex extends Component {
    render() {
        return (
            <main role='main' className='container'>
                <Section01 />
                <Section02 />
            </main>
        )
    }
}
export default MainIndex

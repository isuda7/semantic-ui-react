import React, {Component} from 'react';
import { SubMainHeader, Navigation } from '../../../layouts/components';
import { Section01, Section02 } from './components';
import './style.css';

class TempSubmain extends Component {
    render() {
        return (
            <div className='sub_wrapper'>
                <SubMainHeader title='추천' />
                <main role="main" className='container'>
                    <div className='content_body'>
                        <Section01 />
                        <Section02 />
                    </div>
                </main>
                <Navigation />
            </div>
        )
    }
}
export default TempSubmain
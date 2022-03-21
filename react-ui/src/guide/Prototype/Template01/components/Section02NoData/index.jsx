import React, {Component} from 'react';
import {NoData, InputSrch} from '../../../../../components'

class Section02NoData extends Component {
    render() {
        return (
            <div className='sec'>
                <h3 className='blind'>Heading3</h3>
                <InputSrch />
                <NoData>
                    <p className='msg'>등록된 데이터가 없습니다.</p>
                </NoData>
            </div>
        )
    }
}

export default Section02NoData
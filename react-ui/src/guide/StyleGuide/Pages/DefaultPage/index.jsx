import React, {Component} from 'react'

class DefaultPage extends Component {
    render() {
        return (
            <>
                {/*Rule*/}
                <section className='g_sec'>
                    <h2 className='g_h2'>기본규칙</h2>
                    <p className='gInfo'>웹환경 : 하이브리드 웹</p>
                    <p className='gInfo'>마크업 : <a href='https://react.semantic-ui.com/' target='_blank' rel='noopener noreferrer' className='link'>semantic-ui-react 사용 (바로가기)</a></p>
                    <p className='gInfo'>호환성 : 안드로이드, IOS 호환성 적용</p>
                    <p className='gInfo'>스크립트 : Vanilla JS</p>
                </section>

                {/*Version*/}
                <section className='g_sec'>
                    <h2 className='g_h2'>폴더/파일 구조</h2>
                    <p className='gInfo'>/components/ : 전역공통 컴포넌트</p>
                    <p className='gInfo'>/guide/ : 퍼블리싱 가이드</p>
                    <p className='gInfo'>/layout/ : 사이트 레이아웃</p>
                    <p className='gInfo'>/semantic-ui/ : 프레임워크 UI</p>
                    <p className='gInfo'>/view/ : 페이지</p>
                </section>
            </>
        )
    }
}
export default DefaultPage

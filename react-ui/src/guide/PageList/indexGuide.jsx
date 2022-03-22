import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Gnb from './gnb';
import './style.css';

class PageList extends Component {
    render() {
        return (
            <div className='ia_wrap'>
                <iframe src='/guide/guideAll' frameBorder='0' height='760px' title='Prevoew' name='reactFrame'></iframe>
                <div className='ia_container'>
                    <Gnb />
                    <Table celled structured selectable>
                        <colgroup>
                            <col width='25%'/>
                            <col width='160px'/>
                            <col width='25%'/>
                            <col width='10%'/>
                            <col width='10%'/>
                            <col/>
                        </colgroup>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell textAlign='center'>화면명</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>화면 아이디</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>경로</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>작업자</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>수정일</Table.HeaderCell>
                                <Table.HeaderCell textAlign='center'>기타</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row verticalAlign='top' id='CommunityTemplete'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Components</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>전체보기</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/GuideAll' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Buttons, Icons, Labels, Badges, Diviers</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/ElementsGroup' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Forms</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Forms' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Tables</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Tables' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Cards</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Cards' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Bullets, Gorups</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Lists' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Tabs, Steps</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Tabs' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Accordions</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Accordions' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Drag &amp; Drop</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/DragDrop' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Alert, Confirm, Basic, Buttom Sheet</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Modals' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Swipes</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Swipes' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>ETC</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/EtcGroup' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Custom UI</Table.Cell>
                                <Table.Cell textAlign='center'></Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Custom' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top' id='CommunityTemplete'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Prototype</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Layout Main</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Prototype/TempMain' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Layout Submain</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Prototype/TempSubmain' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Layout Sub - Basic White</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Prototype/Template01' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Layout Sub - Basic Dark 1</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Prototype/Template02' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Layout Sub - Basic Dark 2</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/guide/Prototype/Template03' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}


export default PageList

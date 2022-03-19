import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table} from 'semantic-ui-react';
import Gnb from './gnb';
import './style.css';

class PageList extends Component {
    render() {
        return (
            <div className='ia_wrap'>
                <iframe src='/main/mainIndex' frameBorder='0' height='760px' title='Prevoew' name='reactFrame'></iframe>
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
                                    <span className='text-bold'>Main</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Main</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Mypage</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Mypage</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Category</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Category</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Certification</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Certification</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Community</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Community</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>My Learning</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>My Learning</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
                                </Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Body>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell colSpan='6' className='table-tit'>
                                    <span className='text-bold'>Search</span>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row verticalAlign='top'>
                                <Table.Cell>Search</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {/* (<span>AL-MA-10</span>) */}
                                </Table.Cell>
                                <Table.Cell className='link-address'>
                                    <Link to='/main/mainIndex' target='reactFrame'/>
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

import React from 'react';
import { Outlet } from 'react-router-dom';
import { SubHeader, SubFooter } from '../components';
import '../../index.scss';
import './style.scss';

const LayoutSub = ({children}) => {
  return (
    <div className='sub_wrapper'>
      <SubHeader/>
      <Outlet />
      <SubFooter/>
    </div>
  );
}
export default LayoutSub;
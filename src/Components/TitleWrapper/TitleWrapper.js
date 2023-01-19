import React from 'react';
import './TitleWrapper.scss';

const TitleWrapper = ({ children, title, subTitle }) => {
  return (
    <div className='title-wrapper'>
      {title && <div className='title'>{title}</div>}
      {subTitle && <div className='sub-title'>{subTitle}</div>}
      {children}
    </div>
  );
};

export default TitleWrapper;

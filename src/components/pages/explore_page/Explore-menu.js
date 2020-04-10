import React from 'react';

import './explore.css';

const MenuItem = ({ title, text, imageUrl, size }) => (
    <>
    <div className="context-all">

  <div className={`${size} menu-item`}>
    <div
      className='background-image'
      style={{
          backgroundImage: `url(${imageUrl})`
        }}
        />

  </div>
      <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      
      <span className='subtitle'>CHALLENGE</span>
      <p className="text">{text}</p>
      <span className='view'>View</span>
      
    </div>
    
        </div>
        <hr className="hr-homepage"/>
    </>
);

export default MenuItem;

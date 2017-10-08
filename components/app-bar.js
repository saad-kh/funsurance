import React from 'react';
import Avatar from './avatar';

export default (props) => (
  <header className='container'>
    <span className='title'>
      {props.title}
    </span>
    <div className='avatar'>
      <Avatar source={props.user}/>
    </div>
    <style jsx>{`
      .container{
        width:100%;
        font-family: Heebo;
        text-align: center;
        height: 42px;
        background-color: white;
      }
      .title {
        color: #434F5A;
        font-size: 17px;
        font-weight: bold;
        line-height: 42px;
      }
      .avatar{
        position: absolute;
        top:0px;
        right:5px;
      }
    `}</style>
  </header>
);

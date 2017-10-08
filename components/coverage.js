import React from 'react';

export default (props) => (
  <div className='container'>
    <span className='name'>
      {props.source.name}
    </span>
    <span className='value'>
      {props.source.value}
    </span>
    <style jsx>{`
      .container{
        background-color: transparent;
        border-bottom: 1px solid #434F5A;;
        border-radius: 0px;
        font-family: Heebo;
        text-align: left;
        padding: 5px;
        width: 100%;
      }
      .item {
        margin: 0px 5px;
        text-align: left;
      }
      .name {
        color: #FFFFFF;
        font-size: 17px;
        line-height: 17px;
        display: block;
      }
      .value {
        color: #8C8C8C;
        font-size: 15px;
        line-height: 25px;
        display: block;
      }
    `}</style>
  </div>
);

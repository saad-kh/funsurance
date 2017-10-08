import React from 'react';

export default (props) => (
  <div className='container'>
    <style jsx>{`
      .container{
        margin: 5px;
        width: ${props.big ? '60px' : '32px'};
        height: ${props.big ? '60px' : '32px'};
        background-image: url('${props.source.avatar}');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
);

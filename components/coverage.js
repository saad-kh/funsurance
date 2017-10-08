import React from 'react';

export default (props) => (
  <div className='container'>
    <span className='name'>
      {props.source.name}
    </span>
    <span className='value'>
      {props.source.value}€
    </span>
    <style jsx>{`
    `}</style>
  </div>
);

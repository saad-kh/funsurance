import React from 'react';

export default (props) => (
  <div className='container'>
    <span className='title'>
      {props.title}
    </span>
    <div className='entries'>
      {props.entries instanceof Array ? props.entries.map((entry, i) =>
        <div className='entry' key={i}>
          {props.renderEntry(entry)}
        </div>
      ): null}
    </div>
    <style jsx>{`
    .container{
      margin-top:20px;
      width: 100%;
      text-align: center;
      font-family: Heebo;
      padding-top:5px;
    }
    .title{
      color: #9B9B9B;
      font-size: 11px;
      line-height: 14px;
      text-transform: uppercase;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .title:before,.title:after{
      content:'';
      display: inline-block;
      box-sizing: border-box;
      height: 1px;
      width: 120px;
      border: 1px solid #E8E9EA;
      margin: 0px 10px;
    }
    `}</style>
  </div>
);

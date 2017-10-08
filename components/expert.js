import React from 'react';
import Avatar from './avatar';
import LocationIcon from '../ressources/location.svg';

export default (props) => (
  <div className='container'>
    <div className='avatar'>
      <Avatar source={props.source}/>
    </div>
    <div className='item'>
      <span className='name'>
        {props.source.name}
      </span>
      <span className='distance'>
        <LocationIcon/>
        {' ' + props.source.distance} m
      </span>
    </div>

    <style jsx>{`
      .container{
        background-color: transparent;
        border-bottom: 1px solid #434F5A;;
        border-radius: 0px;
        font-family: Heebo;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        padding: 5px;
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
      .distance {
        color: #8C8C8C;
        font-size: 15px;
        line-height: 25px;
        display: block;
      }
    `}</style>
  </div>
);

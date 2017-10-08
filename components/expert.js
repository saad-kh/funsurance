import React from 'react';
import Avatar from './avatar';
import LocationIcon from '../ressources/location.svg';

export default (props) => (
  <div className='container'>
    <Avatar source={props.source}/>
    <span className='name'>
      {props.source.name}
    </span>
    <span className='distance'>
      <LocationIcon/>
      {props.source.distance}m
    </span>
    <style jsx>{`
    `}</style>
  </div>
);

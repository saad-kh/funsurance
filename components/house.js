import React from 'react';
import KitchenIcon from '../ressources/oven.svg';
import BathroomIcon from '../ressources/bathtube.svg';
import LivingroomIcon from '../ressources/sofa.svg';
import BedroomIcon from '../ressources/bed.svg';

const IconForType={
  'kitchen': <KitchenIcon/>,
  'bathroom': <BathroomIcon/>,
  'livingroom': <LivingroomIcon/>,
  'bedroom': <BedroomIcon/>
}

export default (props) => (
  <div className='container'>
    <span className='title'>
      'House'
    </span>
    <span className='name'>
      {props.house.name}
    </span>
    <span className='name'>
      {props.house.name}
    </span>
    <span className='contract'>
      Zurich Contract Number: {props.house.contractNumber}
    </span>
    {props.house.tags instanceof Array ? props.house.tags.map((tag, i) =>
      <span key={i} className='tag'>
        {tag}
      </span>
    ): null}
    {props.house.rooms instanceof Array ? props.house.rooms.map((room, i) =>
      <div key={i} className='room'>
        <span className='name'>
          {room.name}
        </span>
        <span className='icon'>
          {IconForType[room.type]}
        </span>
      </div>
    ): null}
    <style jsx>{`
    `}</style>
  </div>
);

import React from 'react';
import KitchenIcon from '../ressources/kitchen.svg';
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
      House
    </span>
    <span className='name'>
      {props.house.name}
    </span>
    <span className='contract'>
      Zurich Contract Number: {props.house.contractNumber}
    </span>
    <div className='tags'>
      {props.house.tags instanceof Array ? props.house.tags.map((tag, i) =>
        <span key={i} className='tag'>
          {tag}
        </span>
      ): null}
    </div>
    <div className='rooms'>
      {props.house.rooms instanceof Array ? props.house.rooms.map((room, i) =>
        <div key={i} className='room'>
          <span className='icon'>
            {IconForType[room.type]}
          </span>
          <span className='name'>
            {room.name}
          </span>
        </div>
      ): null}
    </div>
    <style jsx>{`
    .container{
      margin-top:20px;
      width: 80%;
      text-align: center;
      font-family: Heebo;
      padding:20px;
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
    .name{
      color: #434F5A;
      font-family: Heebo;
      font-size: 15px;
      font-weight: 500;
      line-height: 22px;
      text-align: left;
      display:block;
    }
    .contract{
      color: #8C8C8C;
      font-family: Heebo;
      font-size: 13px;
      line-height: 19px;
      text-align: left;
      display:block;
    }
    .tags {
      text-align: left;
    }
    .tag {
      color: #FFFFFF;
      font-family: Heebo;
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      text-align: center;
      border-radius: 10px;
      background-color: #434F5A;
      padding: 0px 6px;
      margin: 2px;
    }

    .rooms{
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .room{
      width: 100px;
      height: 100px;
      border: 0.5px solid #D2D3D5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }

    .room .name{
      color: #8C8C8C;
      font-family: Heebo;
      font-size: 11px;
      line-height: 11px;
      text-align: center;
    }
    `}</style>
  </div>
);

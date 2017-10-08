import React from 'react';
import Avatar from './avatar';
import ContractIcon from '../ressources/contract.svg';
import ToolIcon from '../ressources/intervention.svg';

const iconForType = {
  'policy': <ContractIcon/>,
  'intervention': <ToolIcon/>
};

export default (props) => {
  const {avatars, event} = props;
  const usedAvatars = avatars.filter(a => event.avatars.includes(a.name));
  return (
    <div className='container'>
      <div className='icon'>
        {iconForType[event.type]}
      </div>
      <div className='item'>
        <span className='name'>
          {event.name}
        </span>
        <br/>
        <span className='subtitle'>
          {event.subtitle}
        </span>
      </div>
      <div className='avatars'>
        {usedAvatars.map((avatar, i) =>
          <Avatar source={avatar} key={i}/>
        )}
      </div>
      <style jsx>{`
        .container{
          background-color: #FFFFFF;
          border-bottom: 1px solid #E8E9EA;
          border-radius: 0px;
          font-family: Heebo;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
        }
        .icon {
          margin: 0px 5px;
          padding-top:18px;
          width: 50px;
          height: 50px;
        }
        .icon svg{
          width: 32px;
          height: 32px;
        }
        .item {
          margin: 0px 5px;
          text-align: left;
        }
        .name {
          color: #434F5A;
          font-size: 17px;
          line-height: 22px;
        }
        .subtitle {
          color: #8C8C8C;
          font-size: 15px;
          line-height: 22px;
        }
        .avatars {
          margin: 0px 5px;
          flex-grow: 2;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          align-content: center;
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import AccountIcon from '../ressources/account.svg';
import AssistanceIcon from '../ressources/assistance.svg';
import RenoveIcon from '../ressources/renove.svg';
import UpdateIcon from '../ressources/update.svg';
import Router from 'next/router'

export default () => (
  <div className='container'>
    <span name="update" className='action update'
      onClick={() => (Router.push('/update'))}>
      <UpdateIcon/>
      <span className='title'>
        Add/Edit Insurance
      </span>
    </span>
    <span name="renove" className='action renove'
      onClick={() => (Router.push('/renove'))}>
      <RenoveIcon/>
      <span className='title'>
        Renove
      </span>
    </span>
    <span name="assistance" className='action assistance'
      onClick={() => (Router.push('/prompt'))}>
      <AssistanceIcon/>
      <span className='title'>
        Assistance
      </span>
    </span>
    <span name="account" className='action account'
      onClick={() => (Router.push('/account'))}>
      <AccountIcon/>
      <span className='title'>
        Account
      </span>
    </span>
    <style jsx>{`
      .container {
        margin: 25px 0px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        border: 1px solid #E2E3E5;
        border-radius: 50%;
        width: 316px;
        height: 316px;
      }
      .action{
        width: 40%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
        border: 0.5px solid #E2E3E5;
        color: #434F5A;
        fill: #434F5A;
      }

      .update{
        border-top:none;
        border-left:none;
      }

      .renove{
        border-top:none;
        border-right:none;
      }

      .assistance{
        border-bottom:none;
        border-left:none;
      }

      .account{
        border-bottom:none;
        border-right:none;
      }

      .action .title{
        font-family: Heebo;
        font-size: 13px;
        font-weight: 500;
        line-height: 19px;
        text-align: center;
        margin: 3px;
      }

      .account{
        color: #F96137;
        fill: #F96137;
      }

    `}</style>
  </div>
);

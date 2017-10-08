import React from 'react';
import LoaderIcon from '../ressources/loader.svg';
export default () => (
  <div className='container'>
    <div className='display'>
    <LoaderIcon fill='#434F5A' width='50px' height='50px'/>
    </div>
    <style jsx>{`
      :global(body) {
        margin:0px;
        background-color: #0C1A27;
        font-family: Heebo;
      }
      .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:100vw;
        height:100vh;
        align-items: center;
        align-content: center;
      }
    `}</style>
  </div>
);

/* eslint-disable flowtype/require-valid-file-annotation */
import React from 'react';
import Router from 'next/router';
import Head from '../components/head';

export default () => (
  <div className='container'
    onClick={()=>(Router.push('/dashboard'))}>
    <Head/>
    <style jsx>{`
      :global(body) {
        margin:0px;
      }
      .container {
        width: 100vw;
        height: 100vh;
        background-image: url(/static/bg.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    `}</style>
  </div>
);

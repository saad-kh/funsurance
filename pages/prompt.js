import { Component } from 'react';
import getUser from '../services/user';
import Loader from '../components/loader';
import Router from 'next/router'
import CloseIcon from '../ressources/close.svg';
import Head from '../components/head';
import timeout from '../services/timeout';

class Prompt extends Component {
  constructor(props){
    super(props);
    this.state= {user: null};
    this.dom = {};
  }

  componentDidMount = async () => {
    const user = await getUser();
    await timeout(500);
    this.setState({user});
  }

  promptQuestion = (e) => {
    if (e.key === 'Enter')
      Router.push({
        pathname: '/response',
        query:{
         prompt: e.target.value
        }
      })
  }

  render = () => {
    if(!this.state.user)
      return <Loader/>;

    const user = this.state.user;

    return (
      <div className='container'>
        <Head/>
        <div className='close-icon'
          onClick={() => (Router.push('/dashboard'))}>
          <CloseIcon/>
        </div>
        <span className='introduction'>
          Happy to see you {user.name}
        </span>
        <div className='query'>
          What is the problem?
        </div>
        <input className='prompt' type='text' placeholder='My machine is leaking'
          onKeyPress={this.promptQuestion}/>
        <span className='sos'>
          Emergency? Specific query?
        </span>
        <button className='sos-button'>
          CALL ME
        </button>
        <style jsx>{`
          :global(body) {
            margin:0px;
            background-color: #0C1A27;
            font-family: Heebo;
          }
          .container {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }

          .close-icon{
            cursor: pointer;
            width: 95%;
            margin: 5px 5px;
            text-align: right;
          }

          .introduction {
            width: 80%;
            text-align: left;
            text-transform: uppercase;
            color: #434F5A;
            font-family: Heebo;
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;

          }

          .query {
            width: 80%;
            text-align: left;
            color: #E8E9EA;
            font-family: Heebo;
            font-size: 32px;
            font-weight: 300;
            line-height: 47px;
          }

          .prompt, .prompt:focus{
            outline: none;
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #BCBBC1;
          }

          .prompt::placeholder{
            color: #434F5A;
            font-style: italic;
          }
          .prompt {
            margin-top: 50vh;
            width: 80%;
            text-align: left;
            color: #D2D3D5;
            font-family: Heebo;
            font-size: 24px;
            line-height: 22px;
          }

          .sos {
            margin-top: 30px;
            width: 80%
            text-align: left;
            color: #E8E9EA;
            font-family: Heebo;
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
          }

          .sos-button {
            cursor: pointer;
            border: none;
            margin-top: 15px;
            color: #FFFFFF;
            text-transform: uppercase;
            font-family: Heebo;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
            text-align: center;
            height: 47px;
            width: 318px;
            border-radius: 100px;
            background-color: #434F5A;
          }
        `}</style>
      </div>
    );
  }
}

export default Prompt;

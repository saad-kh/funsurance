import { Component } from 'react';
import getUser from '../services/user';
import Loader from '../components/loader';
import Router from 'next/router'
import CloseIcon from '../ressources/close.svg';
import Head from '../components/head';

class Prompt extends Component {
  constructor(props){
    super(props);
    this.state= {user: null};
    this.dom = {};
  }

  componentDidMount = async () => {
    const user = await getUser();
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
        <h1 className='query'>
          What is the problem?
        </h1>
        <input type='text' placeholder='My whashing machine is leaking'
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
          }
          .container {
            text-align: center;
            color: white;
          }
        `}</style>
      </div>
    );
  }
}

export default Prompt;

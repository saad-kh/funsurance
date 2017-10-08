import { Component } from 'react';
import getUser from '../services/user';
import promptQuestion from '../services/prompt';
import Loader from '../components/loader';
import Router from 'next/router'
import CloseIcon from '../ressources/close.svg';
import Expert from '../components/expert';
import Coverage from '../components/coverage';
import Head from '../components/head';

class Response extends Component {
  constructor(props){
    super(props);
    this.state= {user: null};
    this.dom = {};
  }

  componentDidMount = async () => {
    const user = await getUser();
    const response = await promptQuestion(this.props.url.query.prompt);
    this.setState({
      user,
      response
    });
  }

  render = () => {
    if(!this.state.response)
      return <Loader/>;

    const { user, response } = this.state;

    return (
      <div className='container'>
        <Head/>
        <div className='closeIcon'
          onClick={() => (Router.push('/dashboard'))}>
          <CloseIcon/>
        </div>
        <span className='introduction'>
          I found something for you
        </span>
        <h1 className='query'>
          {user.name} here is what I suggest to you for this situation
        </h1>
        {response.expert ?
          <Expert source={response.expert}/>
        : null}
        {response.coverages && response.coverages.length > 0 ?
          <div className='coverages'>
            <span className='description'>
              Your Coverages
            </span>
            {response.coverages.map((coverage, i) =>
              <Coverage key={i} source={coverage}/>
            )}
          </div>
        :null}
        <button className='ask-again'
          onClick={() => (Router.push('/prompt'))}>
          Ask again
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

export default Response;

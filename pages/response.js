import { Component } from 'react';
import getUser from '../services/user';
import promptQuestion from '../services/prompt';
import Loader from '../components/loader';
import Router from 'next/router'
import CloseIcon from '../ressources/close.svg';
import Expert from '../components/expert';
import Coverage from '../components/coverage';
import Head from '../components/head';
import timeout from '../services/timeout';

class Response extends Component {
  constructor(props){
    super(props);
    this.state= {user: null};
    this.dom = {};
  }

  componentDidMount = async () => {
    const user = await getUser();
    const response = await promptQuestion(this.props.url.query.prompt);
    await timeout(750);

    this.setState({
      user,
      response,
      suggestion: false,
    });
  }

  render = () => {
    if(!this.state.response)
      return <Loader/>;

    const { user, response, suggestion } = this.state;

    return (
      <div className='container'>
        <Head/>
        <div className='close-icon'
          onClick={() => (Router.push('/dashboard'))}>
          <CloseIcon/>
        </div>
        <span className='introduction'>
          I found something for you
        </span>
        { suggestion ?
          <div className='suggestion'>
            <div className='query'>
              {user.name} here is what I suggest to you for this situation
            </div>
            {response.expert ?
              <div className='expert'>
                <Expert source={response.expert}/>
              </div>
            : null}
            <button className='interact'
              onClick={() => (Router.push('/prompt'))}>
              Ask again
            </button>
          </div>
        :
        <div className='issue'>
          <div className='query'>
            I understand you have a {response.issue}
          </div>
          {response.coverages && response.coverages.length > 0 ?
            <div className='coverages'>
              {response.coverages.map((coverage, i) =>
                <Coverage key={i} source={coverage}/>
              )}
            </div>
          :null}
          <button className='interact'
            onClick={() => (this.setState({
              suggestion: true
            }))}>
            Suggest me something
          </button>
        </div>
        }

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

          .suggestion, .issue {
            width: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
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

          .expert {
            margin-top: 15px;
            width: 80%;
          }

          .coverages{
            margin-top: 15px;
            width: 80%;
          }

          .interact {
            position: fixed;
            bottom: 25px;
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

export default Response;

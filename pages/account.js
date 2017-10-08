import { Component } from 'react';
import getUser from '../services/user';
import AppBar from '../components/app-bar';
import Loader from '../components/loader';
import Log from '../components/log';
import House from '../components/house';
import Event from '../components/event';
import Avatar from '../components/avatar';
import ShareIcon from '../ressources/share.svg';
import Head from '../components/head';

class Account extends Component {
  constructor(props){
    super(props);
    this.state= {user: null};
    this.dom = {};
  }

  componentDidMount = async () => {
    const user = await getUser();
    this.setState({user});
  }

  render = () => {
    if(!this.state.user)
      return <Loader/>;

    const user = this.state.user;
    const {
      household,
      house,
      policies,
      interventions } = user;
    const avatars = [
      user,
      ...(user.household || []),
      ...(user.partners || [])
    ];

    return (
      <div className='container'>
        <Head/>
        <AppBar title='Account' user={this.state.user}/>
        <div className='househould'>
          <span className='title'>
            'Household'
          </span>
          <Avatar source={user}/>
          {household instanceof Array ? household.map((userEntry,i) =>
            <Avatar key={i} source={userEntry}/>
          ) : null}
        </div>
        <House house={house}/>
        <Log
          title='Policies'
          entries={policies}
          renderEntry={(entry) =>
            <Event className='event'
              avatars={avatars}
              event={entry}/>}
        />
        <Log
          title='Interventions'
          entries={interventions}
          renderEntry={(entry) =>
            <Event className='event'
              avatars={avatars}
              event={entry}/>}
        />
        <button className='expose-button'>
          <ShareIcon/>
          <span className='text'>
            Concierge Expose as PDF
          </span>
        </button>
        <style jsx>{`
          :global(body) {
            margin:0px;
            font-family: Heebo;
          }
          .container {
            text-align: center;
            background-color: #F1F2F3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Account;

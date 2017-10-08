import { Component } from 'react';
import getUser from '../services/user';
import AppBar from '../components/app-bar';
import ActionWheel from '../components/action-wheel';
import Log from '../components/log';
import Loader from '../components/loader';
import Event from '../components/event';
import Head from '../components/head';

class Dashboard extends Component {
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
    const avatars = [
      user,
      ...(user.household || []),
      ...(user.partners || [])
    ];

    const events = [
      ...(user.policies || []),
      ...(user.interventions || [])
    ];

    events.sort((a, b) => (
      (new Date(a.date)) < (new Date(b.date))
    ));

    return (
      <div className='container'>
        <Head/>
        <AppBar
          title={`Hello ${this.state.user.name}`}
          user={this.state.user}/>
        <ActionWheel user={this.state.user}/>
        <Log
          title='Incoming Moves'
          entries={events}
          renderEntry={(entry) =>
            <Event className='event'
              avatars={avatars}
              event={entry}/>}
        />
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

export default Dashboard;

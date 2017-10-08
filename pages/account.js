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
import age from '../services/age';

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
        <div className='household'>
          <span className='title'>
            Household
          </span>
          <div className='avatars'>
            <div className='avatar'>
              <Avatar source={user} big/>
              <span className='name'>
                {user.name}
              </span>
              <span className='birthday'>
                {age(user.birthday)+ ' y'}
              </span>
            </div>
            {household instanceof Array ? household.map((userEntry,i) =>
              <div key={i} className='avatar'>
                <Avatar source={userEntry} big/>
                <span className='name'>
                  {userEntry.name}
                </span>
                <span className='name'>
                  {age(userEntry.birthday)+ ' y'}
                </span>
              </div>
            ) : null}
          </div>

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
          .household{
            margin-top: 20px;
          }
          .household .avatars{
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            align-content: center;
          }

          .avatar {
            width: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: center;
          }

          .avatar .name {
            color: #4A4A4A;
            font-family: Heebo;
            font-size: 12px;
            line-height: 18px;
          }

          .avatar .birthday {
            color: #9B9B9B;
            font-family: Heebo;
            font-size: 12px;
            line-height: 18px;
          }

          .title{
            color: #9B9B9B;
            font-size: 11px;
            line-height: 14px;
            text-transform: uppercase;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
          }

          .title:before,.title:after{
            content:'';
            display: inline-block;
            box-sizing: border-box;
            height: 1px;
            width: 120px;
            border: 1px solid #E8E9EA;
            margin: 0px 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default Account;

import React from 'react';
import fire from './config/fire';
import Home from './Home';
import Login from './Login';
import Clock from './Clock';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user); 
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div className='App'>{this.state.user ? (<Home />) : (<Login />)}
      </div>
      
    );
  }
}

export default App;

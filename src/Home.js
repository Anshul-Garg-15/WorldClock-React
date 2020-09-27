import React from 'react';
import fire from './config/fire';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className='col-md-6'>
                <h1>Welcome to Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;
import React, { useState } from 'react';
import fire from './config/fire';

const Home = () => {
   let time = new Date().toLocaleTimeString();
   const [currentTime , setTime] = useState(time);

   const updateTime = () => {
       time = new Date().toLocaleTimeString();
       setTime(time);
   };

   setInterval(updateTime, 5000);
    // render() {
        return (
            <div className = 'container'>
            <form className = 'form-container1'>
            <label>Set United States Time: </label>
            <input style = {{fontSize: 15 , padding: 2}} type = 'number' placeholder = '16:25:11' />
            <button style = {{margin: 5  , padding: 2 , width: 100 , alignSelf:"center"}} className = " btn btn-danger" type = 'submit'>Submit</button>
            <label>Time difference for London: </label>
            <input type = 'number' placeholder = '-6' />
            <button style = {{margin: 5  , padding: 2 , width: 100 , alignSelf:"center"}} className = " btn btn-danger" type = 'submit'>Submit</button>
            <label>Time difference for India: </label>
            <input type = 'number' placeholder = '-13' />
            <button  style = {{margin: 5  , padding: 2 , width: 100 , alignSelf:"center"}} className = " btn btn-danger" type = 'submit'>Submit</button>
            </form>
            <div className = 'time-container'>
            <h1 style = {{margin: 2 , padding: 10 , color: 'grey'}}> United States : {currentTime}</h1>
            <h3 style = {{margin: 2 , padding: 10 , color: 'grey'}}> London : {currentTime}</h3>
            <h3 style = {{margin: 2 , padding: 10 , color: 'grey'}}> India : {currentTime}</h3>
            </div>
            </div>
        );

    // }

};

export default Home;
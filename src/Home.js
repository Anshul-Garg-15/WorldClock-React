import React, { useState } from 'react';
import fire from './config/fire';

const Home = () => {

   let indianTime = new Date().toLocaleTimeString();
   const [currentIndiaTime , setTime] = useState(indianTime);

   const updateIndianTime = () => {
       indianTime = new Date().toLocaleTimeString();
       setTime(indianTime);
   };
   
   let usTime = new Date().toLocaleTimeString("en-US" , {timeZone: "America/New_York"});
   const [currentUSTime , setUSTime] = useState(usTime);

   const updateUSTime = () => {
       usTime = new Date().toLocaleTimeString("en-US", {timeZone: "America/New_York"});
       setUSTime(usTime);
   };
   
   let londonTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });
   const [currentLondonTime , setLondonTime] = useState(londonTime);

   const updateLondonTime = () => {
       londonTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' });
       setLondonTime(londonTime);
   };

   setInterval(updateIndianTime, 5000);
   setInterval(updateUSTime, 5000);
   setInterval(updateLondonTime, 5000);
    
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
            <h1 style = {{margin: 2 , padding: 10 , color: 'grey'}}> United States : {currentUSTime}</h1>
            <h3 style = {{margin: 2 , padding: 10 , color: 'grey'}}> London : {currentLondonTime}</h3>
            <h3 style = {{margin: 2 , padding: 10 , color: 'grey'}}> India : {currentIndiaTime}</h3>
            </div>
            </div>
        );

    

};

export default Home;
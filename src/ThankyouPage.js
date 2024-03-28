import React, { useEffect, useState } from 'react'
import Appbody from './Appbody'


function ThankYouPage() {

  const [timeRemaining, setTimeRemaining] = useState(1 * 60);


  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);

      } else {

        clearInterval(timer);
        window.location.href = "https://softtrine.com/";

      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <Appbody
      content={
        <div className='v2 '>
          <i class="fa-solid g fa-circle-check  fa-xl"></i>
          <div className='v4'>
            <h1 className='z1'><b>Thank you!</b></h1>
            <p><b>Your submission has been received.</b></p>
          </div>
        </div>
      }

    />
  )
}

export default ThankYouPage;

import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Background.jpeg';

document.body.style.backgroundColor = "skyblue";

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">fluffyvideos.com!</h4>
            <span className="py-4 text-xl x-2/3 text-center text-gray-500">
              Upload your favorite photos and share them with your friends! 😎
            </span>
          </div>

          <div className="food_profile flex justify-center py-4">
            <img src={avatar} alt="avatar" style={{ width: '110px', height: '200px' }} />
          </div>

          <div className="textarea flex flex-col items-center gap-6">
            <input type="text" name="username" placeholder="enter username here" />
            <button type="submit" className="underline">
              <Link to="/profile">
                Let's go!
              </Link> 
            </button>
          </div>

          <div className="text-center py-4">
            <span className="text-gray-500">
              Not a Member? </span>
              <br></br>
              
              <span>
              <Link className="text-red-500" to="/register">
                Register now!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


 


/**

import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/food_profile.jpeg'

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className='flex justify-center items-center h-screen'>
        <div>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-xl x-2/3 text-center text-gray-500'>
              Explore more by connecting with us.
            </span>
          </div>
 
          <form className='py-1' />
            <div className='food_profile flex justify-center py-4'>
              <img src="food_profile.jpeg" alt="avatar" />
            </div>

            <div className="textarea flex flex-col items-center gap-6">
              <input type="text" placeholder="username"></input>
              <button type="submit" className="underline">
                Let's go!
              </button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>
              Not a Member?<Link className='text-red-500' to="/register">register now!
              </Link>
              </span>
            </div>

        </div>
      </div>
    </div>
  )
}
*/
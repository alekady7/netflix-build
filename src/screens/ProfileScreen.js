import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                    src='https://aws1.discourse-cdn.com/business4/uploads/askfedora/original/2X/2/2ac4191051d9dc1e67b61497247d0f1cba5cd6a0.png'
                    alt=''
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        
                        <button 
                            onClick={() => auth.signOut()} 
                            className='profileScreen__signOut'>Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
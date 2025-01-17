import React from 'react';
import avatar from '../assets/profile.png';
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate'
import { useAuthStore } from '../store/store';

import styles from '../styles/Username.module.css';

export default function Username() {
    
    const navigate = useNavigate();
    const setUsername= useAuthStore(state => state.setUsername);

    const formik = useFormik({
        initialValues : {
          username : ''
        },
        validate : usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
            setUsername(values.username);
            console.log(values)
            navigate('/password')
        }
    })

    return (
        <div className="container mx-auto">

          <Toaster position='top-center' reverseOrder={false}></Toaster>
  
          <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>
    
                <div className="title flex flex-col items-center">
                    <h4 className='text-5xl font-bold mt-[-60px]'>Hello Again!</h4>
                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                        Explore More by connecting with us.
                    </span>
                </div>
    
               <form className='py-1'  onSubmit={formik.handleSubmit}>
                  <div className='profile flex justify-center py-2'>
                      <img src={avatar} className={styles.profile_img} alt="avatar" />
                  </div>
    
                  <div className="textbox flex flex-col items-center gap-6">
                      <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                      <button className={styles.btn} type='submit'>Let's Go</button>
                  </div>
    
                </form>
    
            </div>
          </div>
        </div>
    )
}    
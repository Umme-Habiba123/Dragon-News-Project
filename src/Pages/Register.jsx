import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';



const Register = () => {

    const {setUser , updateUser}=use(AuthContext)

    const [nameError, setNameError]=useState()
    
    const navigate=useNavigate()
    

    const handleRegister=e=>{
        e.preventDefault()

        const name=e.target.name.value
        const photo=e.target.photo.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,photo,email,password)
       
       createUserWithEmailAndPassword(auth,email,password).then(result=>{
        console.log(result)
        updateUser({displayName: name, photoURL:photo}).then(()=>{
            setUser({...result,displayName: name, photoURL:photo })
            navigate('/')
        }).catch((error) => {
          console.log(error)
          setUser(result)
          });
       

       }).catch(error=>console.log(error))

       if(name.length <5){
        setNameError('name should be more then 5 charecter')
        console.log(nameError)
        return
       }else{
        setNameError('')
       }

    }
    return (
        <div>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-sm shadow-2xl bg-white p-8 rounded">
                    <h1 className="text-2xl font-bold mb-6 text-center">Register your account</h1>
                    <form onSubmit={handleRegister} className="space-y-4 ">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
                            <input
                             name='name'
                              type="text" className="input w-full bg-gray-100 border-none py-2" 
                              placeholder="Enter your name" 
                              required/>
                        </div>
                        {
                            nameError && <p className='text-red-500 text-xs'>{nameError}</p>
                        }
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Photo URL</label>
                            <input name='photo' type="photo" className="input bg-gray-100 border-none  w-full py-2" placeholder="Enter your photo URL"
                             required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Email </label>
                            <input
                             name='email' type="email" className="input bg-gray-100 border-none  w-full py-2" placeholder="Enter your email address" 
                             required/>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Password</label>
                            <input 
                            name='password' type="password" className="input bg-gray-100 border-none  w-full py-2" placeholder="Enter your password" 
                             required/>
                        </div>
                        <div className="text-sm text-gray-700">

                        </div>
                        <button type='submit' className="btn btn-neutral w-full mt-4">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
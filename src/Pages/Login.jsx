import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { auth } from '../Firebase/firebase.config';

const Login = () => {

    const [error, setError]=useState('')

    const navigate = useNavigate()

    const location = useLocation()
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password).then(result => {
            console.log(result)
            alert('Succesfully log in ')
            navigate(location.state || '/')
        }).catch(error => {
            console.log(error)
            setError(error)
        })
        
    }
    return (
        <div>

            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-sm shadow-2xl bg-white p-8 rounded">
                    <h1 className="text-3xl font-bold mb-6 text-center">Login your account</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>

                            <label className="block text-gray-700 font-semibold mb-1">Email address</label>
                            {/* email */}
                            <input
                                type="email"
                                name='email'
                                className="input bg-gray-100 border-none   w-full py-2" placeholder="Enter your email address" 
                                required/>
                        </div>
                        <div>

                            <label className="block text-gray-700 font-semibold mb-1">Password</label>
                            {/* password */}
                            <input
                                type="password"
                                name='password'
                                className="input bg-gray-100 border-none  w-full py-2" placeholder="Enter your password"
                                required />
                        </div>
                        {
                            error && <p className='text-red-500 text-xs '>Password Invalid</p>
                        }
                        <div className="text-sm text-gray-700">
                            Don’t have an account? <Link to="/authlayout/register" className="text-red-500 font-semibold underline">Register</Link>
                        </div>
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;
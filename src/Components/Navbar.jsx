
import { Link, NavLink } from 'react-router';
import userPhoto from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const Navbar = () => {

    const {user}=use(AuthContext)

    const handleLogOut=()=>{
        console.log('user trying to logout')

        signOut(auth).then((result)=>{
          console.log(result)
          alert('Log Out Succesfully')
        }).catch(error=>console.log(error))
    }
    
    const links = <>
        <li className='text-lg'><NavLink to='/'>Home</NavLink></li>
        <li className='text-lg'><NavLink to='/About'>About</NavLink></li>
        <li className='text-lg'><NavLink to='/Career'>Career</NavLink></li>
    </>
    return (
        <div className='mt-4 '>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-accent">
                        {links}
                       
                    </ul>
                </div>

                <div className="navbar-end ">
                    <img className='w-12 rounded-full' src={`${user? user.photoURL: userPhoto}`} alt="" />
                    
                   <span className='ml-2'> 
                    {user?.email}</span>
                   {
                    user?(
                        <button onClick={handleLogOut} className='btn btn-primary cursor-pointer text-white text-lg px-6 p-3 ml-3 hover:bg-black'>Log out</button>
                    )
                    : 
                    <Link to={'/authlayout/login'} className="btn btn-primary cursor-pointer text-white text-lg px-6 p-3 ml-3 hover:bg-black">Login</Link>
                   }
                </div>
            </div>

        </div>
    );
};

export default Navbar;
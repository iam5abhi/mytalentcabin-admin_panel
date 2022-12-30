import React from 'react';
import { NavLink, Outlet,useNavigate} from 'react-router-dom';
import {ToastError} from '../../Feature/DisplayMessage'
import {AuthToken} from '../../Feature/Token'

const Navbar = () => {
    const navigate = useNavigate()
    const LogoutHandler=()=>{
        localStorage.removeItem('admin-token')
        setTimeout(() => {
          ToastError('logout SuccessFully');
              navigate('/login')
          }, 1000);
      }
  return (
       <>
       {!AuthToken()?null:
        <nav className=" relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg 
        navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className=" navbar-toggler text-gray-500 border-0 hover:shadow-none       
                     hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
                    "type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                <NavLink to='/dashboard' className=" flex items-center text-md text-semibold text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1 ">Logo </NavLink>
                {/* Left links */}
                <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                    <li className="nav-item p-2">
                    <NavLink to='/dashboard' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Dashboard</NavLink>
                    </li>
                    <li className="nav-item p-2">
                    <NavLink to='/students' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Students</NavLink>
                    </li>
                    <li className="nav-item p-2">
                    <NavLink to='/hrslist' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Human Resource</NavLink>
                    </li> 
                    <li className="nav-item p-2">
                    <NavLink to='/job-view' className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Jobs</NavLink>
                    </li> 
                </ul>  
                </div>
                < Outlet />
            <div className="dropdown relative">
                <a className="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-full" style={{height: 25, width: 25}} alt loading="lazy" />
                </a>
                <ul className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0" aria-labelledby="dropdownMenuButton2">
                <li>
                    <a className="dropdown-item text-sm py-2 px-4 font-normal block
                    w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer">Dashboard</a>
                </li>
                <li>
                    <a className="dropdown-item text-sm py-2 px-4 font-normal block
                    w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer">Change Password</a>
                </li>
                <li onClick={LogoutHandler}>
                    <a className="dropdown-item text-sm py-2 px-4 font-normal block
                    w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</a>
                </li>
                </ul>
            </div>
          </div>
        </nav>
        } 
       </>
  )
}

export default Navbar;
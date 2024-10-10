import React from 'react'

const NavbarComponent = () => {
    return (
        <div className="bg-slate-800 h-16 px-16 items-center flex">
      <h1 className="text-3xl font-bold text-green-400 hover:text-white"> 👨🏼‍💻 Employee Management Service </h1>
      <div className="space-x-4 ml-auto">
        <a  className="text-white hover:text-blue-400 font-semibold text-xl" href="/"> Home</a>
        <a  className="text-white hover:text-blue-400 font-semibold text-xl"  href="/"> Profile</a>
        <a  className="text-white hover:text-blue-400 font-semibold text-xl"  href="/"> Logout </a>
      </div>
    </div>
    )
}

export default NavbarComponent

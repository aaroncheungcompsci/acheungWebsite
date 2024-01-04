import React from 'react'
import Home from './NavbarButtons/Home'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl" href='/'>Home</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a>Terminal</a></li>
                <li>
                    <details>
                        <summary>
                            Fun Things
                        </summary>
                        <ul className="p-2 bg-base-300 rounded-t-none">
                            <li><a href='users'>Users</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

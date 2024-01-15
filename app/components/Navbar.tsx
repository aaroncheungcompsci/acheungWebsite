import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
            <a className="btn btn-ghost text-2xl italic font-serif" href='/'>AC</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a className='italic'>About Me</a></li>
                <li><a className='italic'>Terminal</a></li>     
                <li>
                    <details>
                        <summary className='italic'>
                            Fun Things
                        </summary>
                        <ul className="p-2 bg-base-300 rounded-t-none">
                            <li><a href='users'>Users</a></li>
                            <li><a>Terminal</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

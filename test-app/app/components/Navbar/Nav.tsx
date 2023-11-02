'use client'
import React from 'react'
import DarkModeButton from '../Buttons/DarkModeButton'

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Logo</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='https://put-link-here'>Contact</a></li>
      <li>
        <details>
          <summary>
            Menu
          </summary>
          <ul className="p-2 bg-base-100">
            <li><DarkModeButton /></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Nav
import { NavLink } from "react-router-dom"
function Navbar() {
  return (
    <div className="navbar  shadow-sm pl-[75px]">
     <div >
     <NavLink to="/">
     <h1 className="text-2xl font-weight-900 border-l-gray-300">REST<span className="text-blue-700 ">Explorer</span></h1>
     </NavLink>
     </div>
     <div className="ml-6">
     <ul className="ml-6 flex gap-x-3.5">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Countries ">countries</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
     </ul>
     </div>
  </div>
  )
}

export default Navbar

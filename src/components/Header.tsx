import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
// import logo from '../assets/logo.jpg'
// import avatar from '../assets/avatar.png'
import { navItems } from '../data/navItem'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <Link to="/" className="flex items-center space-x-2">
      {/* <img src={logo} alt="Logo" className="w-8 h-8" /> */}
      <span className="text-xl font-bold text-blue-600">BubbleLog</span>
    </Link>

    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="text-gray-700 hover:text-blue-500 font-medium"
        >
          {item.name}
        </Link>
      ))}
      {/* <img
        src={avatar}
        alt="Profile"
        className="w-8 h-8 rounded-full border border-gray-300"
      /> */}
    </nav>


    <button
      onClick={toggleMenu}
      className="md:hidden text-gray-700 focus:outline-none"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {isOpen && (
    <div className="md:hidden bg-white px-6 py-4 space-y-3 shadow">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setIsOpen(false)}
          className="block text-gray-700 hover:text-blue-500 font-medium"
        >
          {item.name}
        </Link>
      ))}
      {/* <div className="pt-3 border-t flex items-center space-x-2">
        <img
          src={avatar}
          alt="Profile"
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <span className="text-gray-700 font-medium"></span>
      </div> */}
    </div>
  )}
</header>


  )
}

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Phone from '../Components/Phone.avif'
import ThemeContext from '@/context/ThemeContext'
import { IoSunny  } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
    <nav className="bg-amber-500">
      <div className="max-w-7xl mx-auto   flex justify-between items-center py-2 px-6">
        <section>
          <img src={Phone} alt="" className='h-16'/>
        </section>

        <section className='hidden lg:block space-x-6 font-semibold text-xl'>
          <Link to='/'>Home</Link>
          <Link to='product'>Product</Link>
          <Link to='contact'>Contact</Link>
        </section>

        <section className='flex items-center gap-2 font-medium text-lg'>
          <h2>Teachology</h2>
          <img src="teachnology_bg.jpg" alt="" className='h-12 rounded-full overflow-hidden' />
           <button onClick={toggleTheme} className="text-2xl cursor-pointer">
            {theme === "dark" ? <IoSunny /> : <IoIosMoon />}
          </button>
          <button>Cart</button>
        </section>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
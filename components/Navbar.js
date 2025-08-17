import { useState, useEffect } from 'react'
import assets from '../public/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "framer-motion"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navbarClasses = `flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-2xl font-medium transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/98 dark:bg-gray-900/98 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg' 
      : 'bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm'
  }`

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeOut' }} 
      className={navbarClasses}
    >
      <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className='w-32 sm:w-40' />

      <div className={`text-gray-800 dark:text-gray-100 sm:text-sm font-semibold ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSidebarOpen(false)} />
        <a href="#" className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Home</a>
        <a href="#services" className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Services</a>
        <a href="#our-work" className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Our Work</a>
        <a href="#contact-us" className='sm:hover:border-b' onClick={() => setSidebarOpen(false)}>Contact Us</a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden' />
        <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>Connect <img src={assets.arrow_icon} width={14} alt="" /></a>
      </div>
    </motion.div>
  )
}

export default Navbar

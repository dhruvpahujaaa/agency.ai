import { useEffect } from 'react'
import assets from '../public/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // theme preference from device:
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    }
  }, [])

  return (
    <>
      <button>
        {theme === 'dark' ? 
          <img onClick={() => setTheme('light')} src={assets.sun_icon} alt="" className='size-8.5 p-1.5 border border-gray-500 rounded-full' /> : 
          <img src={assets.moon_icon} alt="" className='size-8.5 p-1.5 border border-gray-500 rounded-full' onClick={() => setTheme('dark')} />
        }
      </button>
    </>
  )
}

export default ThemeToggleBtn

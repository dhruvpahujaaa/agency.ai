import Title from './Title'
import assets from '../public/assets'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const ContactUs = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Thank you for reaching out! We will get back to you soon.")
        event.target.reset()
      } else {
        toast.error(result.message || "Failed to send message. Please try again.")
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.")
      console.error('Contact form error:', error)
    }    
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='contact-us' 
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-32 lg:pt-40 text-gray-700 dark:text-white'
    >
      <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit} 
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >
        <div className="">
          <p className='mb-2 text-sm font-medium'>Your name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
            <img src={assets.person_icon} alt="" />
            <input name="name" type="text" placeholder='Enter your name' className='w-full p-3 text-sm outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' required />
          </div>
        </div>

        <div className="">
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
            <img src={assets.email_icon} alt="" />
            <input name='email' type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' required />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea name="message" rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' required />
        </div>

        <button type="submit" className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>Submit <img src={assets.arrow_icon} alt="" className='w-4' /></button>
      </motion.form>
    </motion.div>
  )
}

export default ContactUs

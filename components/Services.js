import assets from '../public/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "framer-motion"

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital experiences that connect, emgage...',
      icon: assets.ads_icon,
    },
    {
      title: 'Content Marketing',
      description: 'We help you execute your plan and deliever results.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Content Writing',
      description: 'We deliver content that engages, educates and inspires.',
      icon: assets.content_icon,
    },
    {
      title: 'Social Media',
      description: 'We help you build a strong online presence and connect with your audience.',
      icon: assets.social_icon,
    }
  ]

  return (
    <motion.div
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='services' 
      className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 text-gray-700 dark:text-white'
    >
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
      <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services

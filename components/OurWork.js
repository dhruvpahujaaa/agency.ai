import Title from './Title'
import assets from '../public/assets'
import { motion } from "framer-motion"

const OurWork = () => {
  const workData = [
    {
      title: 'Mobile app marketing',
      desc: 'We helped a leading mobile app increase sales by 30%.',
      image: assets.work_mobile_app
    },
    {
      title: 'Fitness app promotion',
      desc: 'Developed a comprehensive fitness app that integrates with wearables.',
      image: assets.work_fitness_app
    },
    {
      title: 'Dashboard management',
      desc: 'We help you execute your plan and deliver results.',
      image: assets.work_dashboard_management
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id='our-work' 
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 text-gray-700 dark:text-white'
    >
      <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="hover:scale-102 duration-500 transition-all cursor-pointer" 
            key={index}
          >
            <img src={work.image} alt={work.title} className='w-full rounded-xl' />
            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
            <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurWork

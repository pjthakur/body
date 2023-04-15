import React from 'react'
import Form from '../components/Forms'
import {motion} from 'framer-motion'
import contact from '../assets/contactus.png'

const Contact = () => {
  return (
    <motion.div initial={{opacity:0,}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:0.5}}}>
    <div className = "contactus">
      <img src={contact}/>
      <div className='contact-main'>
        <div className='contact-sub1'>
          
        </div>
        <div className='contact-sub2'>

        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default Contact
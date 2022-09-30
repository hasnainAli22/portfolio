import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'


type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 flex flex-start justify-between p-5 max-w-7xl mx-auto xl:items-center z-20'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center'>
                <SocialIcon
                    url='https://wa.me/+923036865503'
                    fgColor='gray'
                    bgColor='transparent'
                    network='whatsapp'
                />
                <SocialIcon
                    url='https://www.linkedin.com/in/hasnain-ali-701a89208/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/thisishasnainali/'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div
             initial = {{
                x: 500,
                opacity: 0,
                scale:0.5
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration: 1
            }}
            >
                <SocialIcon
                    className='cursor-pointer'
                    url="mailto:our.hasnain22@gmail.com"
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
            </motion.div>
        </header>
    )
}

export default Header
import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/profile_image_pro.jpg';
import { motion } from 'framer-motion';

type Props = {}
// const MotionImage = motion(Image, { forwardMotionProps: true })

const About = (props: Props) => {
    return (
        <div className='flex flex-col text-center relative md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly items-center mx-auto'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-2xl text-gray-500'>About</h3>
            <motion.div
                initial={{
                    opacity: 0,
                    x: -200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{
                    once: true
                }}
                className="mt-10 md:mt-0 -mb-20 xl:w-[500px] xl:h-[400px] md:w-[35rem] md:h-80 w-56 h-56 relative"
            >
                <Image
                    src={ProfilePic}
                    layout='fill'
                    className='object-cover md:rounded-lg rounded-full'


                />

            </motion.div>
            <div className='space-y-10 md:px-10 px-0'>
                <h2 className="text-3xl font-semibold">Here is the <span className='underline decoration-[#F7AB0A]'>little</span> background!</h2>
                <p className=''>
                    Web Developer with passion for developing scalable web applicatitons and working across the full stack. I am looking for job to continue to grow my skill set while contributing to the company I work for.
                </p>
            </div>
        </div>
    )
}

export default About
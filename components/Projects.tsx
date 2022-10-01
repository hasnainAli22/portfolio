import React from 'react';
import Image from 'next/image';
import WebImg from '../public/website.jpg';
import { MdOutlineMonitor as Monitor } from 'react-icons/md';
import { motion } from 'framer-motion'


type Props = {}

const Projects = (props: Props) => {
    let projects: number[] = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen flex flex-col text-center relative md:text-left md:flex-row justify-evenly items-center max-w-full z-0'>
            <h3 className='absolute top-24 tracking-[20px] text-2xl text-gray-500 uppercase'>Projects
            </h3>
            <div className='relative flex w-full overflow-x-scroll  overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((item, index) => (
                    <div key={index} className='w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center snap-center p-20 h-screen md:p-40 md:pt-40'>
                        {/* <Image src={WebImg} className='' /> */}
                        <Monitor className='w-52 h-52 text-[#F7AB0A]' />

                        <div className='max-w-6xl space-y-10 px-0 md:px-10'>
                            <h4 className='text-4xl font-semibold text-center '><span className='underline decoration-[#F7AB0A]'>Case Study {1 + index} of {projects.length}:</span> Clone </h4>
                            <p className='text-center md:text-left text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum commodi nostrum laudantium molestias aperiam culpa ullam iusto vero, quia minima iste aliquam quas asperiores perferendis possimus. Maxime voluptates beatae voluptatibus?</p>
                        </div>
                    </div>
                )
                )}
                {/* Projects */}
                {/* Projects */}
                {/* Projects */}

            </div>
            <div className='w-full absolute top-[30%] h-[500px] bg-[#F7AB0A]/10 left-0 -skew-y-12' />
        </motion.div>
    )
}

export default Projects
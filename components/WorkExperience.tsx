import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const WorkExperience = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2
            }}
            className='relative flex flex-col md:flex-row text-left overflow-hidden max-w-full px-10 h-screen justify-center items-center'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-2xl text-gray-500'>Experience</h3>
            <div className='w-full flex space-x-7 flex-row snap-x snap-mandatory overflow-x-scroll p-10'>
                <ExperienceCard title='React Js Developer' companyName='XLogic Solutions' start='Sep, 2021' end='March, 2022' skills={["React.Js", "Node.Js","MongoDB"]}/>
                <ExperienceCard title='Web Developer Internship' companyName='XLogic Solutions' start='Jul, 2021' end='Aug, 2022' skills={["React.Js","Redux", "Tailwind CSS"]}/>
            </div>
        </motion.div>
    )
}

export default WorkExperience
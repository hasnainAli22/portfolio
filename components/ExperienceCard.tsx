import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../public/profile_image_pro.jpg';


type Props = {
    title: string,
    companyName: string,
    start: string,
    end: string,
    skills: string[]
}

const ExperienceCard = (props: Props) => {
    return (
        <article className='flex flex-col space-y-7 rounded-lg items-center flex-shrink-0 snap-center w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] p-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}

                src='data:image/png;base64,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'
                className="w-20 h-20 rounded-full object-cover object-center "

            />
            <div className="px-0 md:px-10">
                <h4 className='text-4xl font-light'>{props.title}</h4>
                <p className='font-bold text-2xl mt-1'>{props.companyName}</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech Used */}
                </div>
                <p className='uppercase py-4 text-gray-300'>{`${props.start} - ${props.end}`}</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {props.skills.map((item)=>(<li>{item}</li>))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
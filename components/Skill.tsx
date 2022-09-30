import React from 'react';
import { motion } from 'framer-motion';
type Props = {
    directionLeft?: boolean,
    children: JSX.Element,
    grip: number,

}

const Skill = ({ directionLeft = false , children, grip, }: Props) => {

    return (
        <div className='group relative flex cursor-pointer'>

            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 2.3
                }}
            >
                {children}
                {/* <JsIcon className='rounded-full w-20 h-20 md:w-24 md:h-24 filter text-gray-800 bg-gray-200 border-gray-800' /> */}
                <div className='absolute w-full h-full top-0 rounded-full opacity-0 hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out'>
                    <div className='w-full h-full flex items-center justify-center'>
                        <p className="text-3xl font-bold text-black opacity-100">{grip}%</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Skill
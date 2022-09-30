import React from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion';
import { 
    SiJavascript as JsIcon,
    SiTailwindcss as Tailwind,
    SiTypescript,
    SiNodedotjs as NodeJs,
    SiExpress as ExpressJs,
    SiMongodb as MongoDB,
    SiBootstrap as Bootstrap,
    SiNextdotjs as NextJs,
    SiGithub as Github,
    SiHtml5 as Html5,
    SiSass as Sass,
    SiRedux as Redux,
} from 'react-icons/si'

const Icons = [
    {"Icon": JsIcon, "grip": 90, "direction":true, },
    {"Icon": NodeJs, "grip": 80, "direction":true, },
    {"Icon": ExpressJs, "grip": 80, "direction":true, },
    {"Icon": Tailwind, "grip": 70, "direction":true, },
    {"Icon": SiTypescript, "grip": 30, "direction":true, },
    {"Icon": MongoDB, "grip": 80, "direction":true, },
    {"Icon": Bootstrap, "grip": 90, "direction":false, },
    {"Icon": NextJs, "grip": 70, "direction":false, },
    {"Icon": Github, "grip": 60, "direction":false, },
    {"Icon": Html5, "grip": 95, "direction":false, },
    {"Icon": Sass, "grip": 80, "direction":false, },
    {"Icon": Redux, "grip": 80, "direction":false, },

]

type Props = {}

const Skills = (props: Props) => {
    const iconClasses = 'rounded-full w-20 h-20 md:w-24 md:h-24 filter text-gray-800 bg-gray-200 border-gray-800';
    return (
        <motion.div
            className='relative flex flex-col md:flex-row text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen mx-auto items-center justify-center '>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over the skill for current proficency.
            </h3>
            <div className="grid grid-cols-4 gap-5 mt-20">
                {Icons.map(({direction, grip, Icon})=>(
                    <Skill directionLeft={direction} grip={grip}>
                        <Icon className={iconClasses} />
                    </Skill>
                ))}
                {/* <Skill directionLeft={true} grip={80} >
                    <JsIcon  className={iconClasses}/>
                </Skill> */}
                {/* <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={false} />
                <Skill directionLeft={false} />
                <Skill directionLeft={false} />
                <Skill directionLeft={false} />
                <Skill directionLeft={false} />
                <Skill directionLeft={false} /> */}
            </div>
        </motion.div>
    )
}

export default Skills
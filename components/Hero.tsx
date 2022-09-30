import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import ProfilePic from '../public/profile_image_pro.jpg';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ["It's Hasnain Ali", "<Love the coding and challanges !>", "Love Learning new things!","Passionate Web Developer!"],
        loop: false,
        delaySpeed: 2000

    });
    return (
        <div className='h-screen flex flex-col justify-center items-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                src={ProfilePic}
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                height={150}
                width={150}
            />
            <div className="text-center z-20">
                <h2 className='text-sm uppercase text-gray-500 py-2 tracking-[15px]'>
                    Web Developer
                </h2>
                <h1 className='text-5xl xl:text-6xl px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='orangered' />
                </h1>
                <div className='pt-5'>

                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#contact'>
                        <button className='heroButton'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero